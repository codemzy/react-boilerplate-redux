var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    
    render() {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text"><IndexLink to="/" activeClassName="active">React Boilerplate</IndexLink></li>
                      <li>
                        <Link to="/one" activeClassName="active">One</Link>
                      </li>
                    </ul>
              </div>
              <div className="top-bar-right show-for-large">
                <ul className="menu">
                  <li className="menu-text">Created by <a href="https://codemzy.github.io" target="_blank">Codemzy</a></li>
                </ul>
              </div>
            </div>
        );
    }
}

module.exports = Nav;