var React = require('react');

// components
var Nav = require('./Nav.js');

var MainComponent = (props) => {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};


module.exports = MainComponent;