'use strict';

var redux = require('redux');

console.log('Starting redux example');

// defaults

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

// reducer
var reducer = (state = stateDefault, action) => {
    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: action.name
        };
    }
    if (action.type === 'ADD_HOBBY') {
        return {
            ...state,
            hobbies: [
                ...state.hobbies,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ]
        };
    }
    if (action.type === 'REMOVE_HOBBY') {
        return {
            ...state,
            hobbies: state.hobbies.filter(function (hobby) {
                return hobby.id !== action.id;
            })
        };
    }
    if (action.type === 'ADD_MOVIE') {
        return {
            ...state,
            movies: [
                ...state.movies,
                {
                    id: nextMovieId++,
                    movie: action.movie
                }
            ]
        };
    }
    if (action.type === 'REMOVE_MOVIE') {
        return {
            ...state,
            movies: state.movies.filter(function (movie) {
                return movie.id !== action.id;
            })
        };
    }
    return state;
};

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

// unsubscribe to changes
// unsubscribe();

// dispatch another action
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

// dispatch another action
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

// dispatch another action
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Julie'
});

// dispatch another action
store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Bridge to Terabithia'
});

// dispatch another action
store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Flight of the Navigator'
});

// dispatch another action
store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Eternal sunshine of a spotless mind'
});

// dispatch another action
store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

// dispatch another action
store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});