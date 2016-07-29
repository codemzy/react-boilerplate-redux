var React = require('react');
var {Link} = require('react-router');

var MainComponent = () => {
    
    return (
        <div>
            <h1 className="text-center page-title">Welcome to Boilerplate!</h1>
            <p>This is a simple web app built with Node, Express and ReactJS. It includes scss, webpack set up and testing.</p>
        </div>
    );

};

module.exports = MainComponent;