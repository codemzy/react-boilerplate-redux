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
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes in state
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Search is', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

// get the current state
var currentState = store.getState();

// Object {searchText: "", showCompleted: false, todos: Array[0]}
console.log('currentState', currentState);

// dispatch an action
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    search: 'This is the new search text'
});

// dispatch another action
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    search: 'This is the second search text'
});