'use strict';

var redux = require('redux');

console.log('Starting redux todo example');

// reducer
var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    if (action.type === 'CHANGE_SEARCH_TEXT') {
        return {
            ...state,
            searchText: action.search
        };
    }
    return state;
};

// store - passing the reducer as arg
var store = redux.createStore(reducer);

// get the current state
var currentState = store.getState();

// Object {searchText: "", showCompleted: false, todos: Array[0]}
console.log('currentState', currentState);

// dispatch an action
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    search: 'This is the new search text'
});

// Has search text changed Object {searchText: "This is the new search text", showCompleted: false, todos: Array[0]}
console.log('Has search text changed', store.getState());