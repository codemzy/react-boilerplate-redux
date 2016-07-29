var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('./styles/styles.scss');

// routes
var routes = require('./config/router');

ReactDOM.render(routes, document.getElementById('app'));