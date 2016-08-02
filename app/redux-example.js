'use strict';

var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

// reducers

// NAME REDUCER ==============================
// reducer to handle the name property in state
// state is now a string as we are only passed the name element by the new reducer
var nameReducer = (state = 'Anonymous', action) => {
    if (action.type === 'CHANGE_NAME') {
        // no longer returning an object, just returning the new string for the name property on state
        return action.name;
    }
    return state;
};

// Name ACTION GENERATOR
var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name: name
    };
};

// HOBBIES REDUCER ==============================
var nextHobbyId = 1;
// state is now an array because we are only passed the element
var hobbiesReducer = (state = [], action) => {
    if (action.type === 'ADD_HOBBY') {
        // no longer returning an object, returning an array
        return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
    }
    if (action.type === 'REMOVE_HOBBY') {
        return state.filter(function (hobby) {
                return hobby.id !== action.id;
            });
    }
    return state;
};

// addHobby ACTION GENERATOR
var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby: hobby
    };
};

// removeHobby ACTION GENERATOR
var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id: id
    };
};

// MOVIES REDUCER ==============================
var nextMovieId = 1;
// state is now an array because we are only passed the element
var moviesReducer = (state = [], action) => {
    if (action.type === 'ADD_MOVIE') {
        return [
                ...state,
                {
                    id: nextMovieId++,
                    movie: action.movie
                }
            ];
    }
    if (action.type === 'REMOVE_MOVIE') {
        return state.filter(function (movie) {
                return movie.id !== action.id;
            });
    }
    return state;
};

// addMovie ACTION GENERATOR
var addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        movie: movie
    };
};

// removeMovie ACTION GENERATOR
var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id: id
    };
};

// MAP REDUCER ==============================
var mapReducer = (state = {isFetching: false, url: false}, action) => {
    if (action.type === 'START_LOCATION_FETCH') {
        return {
            isFetching: true,
            url: false
        };
    }
    if (action.type === 'COMPLETE_LOCATION_FETCH') {
        return {
            isFetching: false,
            url: action.url
        };
    }
    return state;
};

// startLocationFetch ACTION GENERATOR
var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    };
};

// completeLocationFetch ACTION GENERATOR
var completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url: url
    };
};

// function to get data from API
var fetchLocation = () => {
    store.dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function(res) {
        var loc = res.data.loc;
        var baseUrl = 'https://maps.google.com?q=';
        store.dispatch(completeLocationFetch(baseUrl + loc));
    });
};

// map all the new reducers
var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
});

// store - passing the reducer as arg
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes in state
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('New State', store.getState());
    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + 'target="_blank">View your location</a>';
    }
});

// get the current state
var currentState = store.getState();

// Object {name: "Anonymous"}
console.log('currentState', currentState);

// fetchLocation
fetchLocation();

 // dispatch an action
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emma'
});

// dispatch using action generator
store.dispatch(changeName('Frank'));

// unsubscribe to changes
// unsubscribe();

// dispatch another action
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

// dispatch another action with action generator
store.dispatch(addHobby('Walking'));

// dispatch using action generator
store.dispatch(changeName('Julie'));

// dispatch another action
store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Bridge to Terabithia'
});

// dispatch another action with action generator
store.dispatch(addMovie('Flight of the Navigator'));

// dispatch another action with action generator
store.dispatch(addMovie('Eternal sunshine of a spotless mind'));

// dispatch another action with action generator
store.dispatch(removeHobby(2));

// dispatch another action with action generator
store.dispatch(removeMovie(1));