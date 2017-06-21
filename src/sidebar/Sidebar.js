import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

	// eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render(){
        return <aside className="gigt-list">
            {this.props.children}
        </aside>
    }
}

export default Sidebar;