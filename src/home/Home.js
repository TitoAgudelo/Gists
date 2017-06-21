import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    // eslint-disable-next-line
	constructor() {
        super();
    }

    render(){
        return <section>
            <h1>Welcome to Gigts Test</h1>
            <p>Please select any gigt of the list in the left.</p>
            <p>The default user is titoagudelo for this test.</p>
        </section>
    }
}

export default Home;