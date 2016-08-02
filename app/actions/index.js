// Name ACTION GENERATOR
export var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name: name
    };
};

// addHobby ACTION GENERATOR
export var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby: hobby
    };
};

// removeHobby ACTION GENERATOR
export var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id: id
    };
};

// addMovie ACTION GENERATOR
export var addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        movie: movie
    };
};

// removeMovie ACTION GENERATOR
export var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id: id
    };
};

// startLocationFetch ACTION GENERATOR
export var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    };
};

// completeLocationFetch ACTION GENERATOR
export var completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url: url
    };
};
