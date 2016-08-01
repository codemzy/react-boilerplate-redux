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
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes in state
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
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
    type: 'CHANGE_NAME',
    name: 'Julie'
});