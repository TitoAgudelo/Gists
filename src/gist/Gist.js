import React, { Component } from 'react';
import './Gist.css';

class Gist extends Component {

  // eslint-disable-next-line
	constructor(props) {
    super(props);
  }

  render(){
    return <div>
      <h1>{this.props.gist.description || '[no description]'}</h1>
      <p><a href={this.props.gist.html_url}>view on GitHub</a></p>
      <p>Files:</p>
      <ul>
        {
          Object.keys(this.props.gist.files).map(key => (
            <li key={key}>
              <a href={this.props.gist.files[key].raw_url}>
                {key}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  }
}

export default Gist;