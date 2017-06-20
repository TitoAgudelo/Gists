import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

	constructor(props) {
        super(props)
    }

    render(){
        return <aside>
            {this.props.children}
        </aside>
    }
}

export default Sidebar;