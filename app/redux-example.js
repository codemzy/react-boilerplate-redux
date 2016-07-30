'use strict';

var redux = require('redux');

console.log('Starting redux example');

// reducer
var reducer = (state = { name: 'Anonymous' }, action) => {
    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: action.name
        };
    }
    return state;
};

// store - passing the reducer as arg
var store = redux.createStore(reducer);

// get the current state
var currentState = store.getState();

// Object {name: "Anonymous"}
console.log('currentState', currentState);

 // dispatch an action
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emma'
});

// see if the reducer works
// Name should be Emma Object {name: "Emma"}
console.log('Name should be Emma', store.getState());