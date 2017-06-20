import React, { Component } from 'react';
import './Gists.css';

class Gists extends Component {

	constructor(props) {
        super(props)
    }

    render(){
        return <p>
            {this.props.children}
        </p>
    }
}

export default Gists;