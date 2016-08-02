var redux = require('redux');
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index.js');

export var configure = () => {

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

    return store;
};