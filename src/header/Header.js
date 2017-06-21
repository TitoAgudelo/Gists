import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    // eslint-disable-next-line
	constructor() {
        super();
    }

    render(){
        return <header>
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img src="/img/startup.svg" alt="logo" /></a>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="/create">New Gigt</a></li>
                    <li><a href="https://github.com/TitoAgudelo/Gists">Repository</a></li>
                </ul>
            </nav>
        </header>
    }
}

export default Header;