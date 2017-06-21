import React, { Component } from 'react';
import './Gists.css';

class Gists extends Component {

    // eslint-disable-next-line
	constructor(props) {
        super(props);
    }

    render(){
        return <div className="gigt-item">
            {this.props.children}
        </div>
    }
}

export default Gists;