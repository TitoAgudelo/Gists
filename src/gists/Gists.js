import React, { Component } from 'react';
import './Gists.css';

class Gists extends Component {

    // eslint-disable-next-line
	constructor(props) {
        super(props);
    }

    render(){
        return <p>
            {this.props.children}
        </p>
    }
}

export default Gists;