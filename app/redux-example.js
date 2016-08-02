'use strict';

var redux = require('redux');

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

// map all the new reducers
var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

// store - passing the reducer as arg
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes in state
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
    console.log('New State', store.getState());
});

// get the current state
var currentState = store.getState();

// Object {name: "Anonymous"}
console.log('currentState', currentState);

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