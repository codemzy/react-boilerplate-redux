// NAME REDUCER ==============================
// reducer to handle the name property in state
// state is now a string as we are only passed the name element by the new reducer
export var nameReducer = (state = 'Anonymous', action) => {
    if (action.type === 'CHANGE_NAME') {
        // no longer returning an object, just returning the new string for the name property on state
        return action.name;
    }
    return state;
};

// HOBBIES REDUCER ==============================
var nextHobbyId = 1;
// state is now an array because we are only passed the element
export var hobbiesReducer = (state = [], action) => {
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

// MOVIES REDUCER ==============================
var nextMovieId = 1;
// state is now an array because we are only passed the element
export var moviesReducer = (state = [], action) => {
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

// MAP REDUCER ==============================
export var mapReducer = (state = {isFetching: false, url: false}, action) => {
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