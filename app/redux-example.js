'use strict';

var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var store = require('./store/configureStore.js').configure();
var actions = require('./actions/index.js');

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

// function to get data from API
var fetchLocation = () => {
    store.dispatch(actions.startLocationFetch());
    axios.get('http://ipinfo.io').then(function(res) {
        var loc = res.data.loc;
        var baseUrl = 'https://maps.google.com?q=';
        store.dispatch(actions.completeLocationFetch(baseUrl + loc));
    });
};

// fetchLocation
fetchLocation();

 // dispatch an action
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emma'
});

// dispatch using action generator
store.dispatch(actions.changeName('Frank'));

// unsubscribe to changes
// unsubscribe();

// dispatch another action
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

// dispatch another action with action generator
store.dispatch(actions.addHobby('Walking'));

// dispatch using action generator
store.dispatch(actions.changeName('Julie'));

// dispatch another action
store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Bridge to Terabithia'
});

// dispatch another action with action generator
store.dispatch(actions.addMovie('Flight of the Navigator'));

// dispatch another action with action generator
store.dispatch(actions.addMovie('Eternal sunshine of a spotless mind'));

// dispatch another action with action generator
store.dispatch(actions.removeHobby(2));

// dispatch another action with action generator
store.dispatch(actions.removeMovie(1));