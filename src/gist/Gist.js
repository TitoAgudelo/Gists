import React, { Component } from 'react';
import './Gist.css';

class Gist extends Component {

  // eslint-disable-next-line
	constructor(props) {
    super(props);
  }

  render(){
    return <div className="gigt-detail">
      <h1 className="gigt-description">{this.props.gist.description || '[no description]'}</h1>
      <p><span className="gigt-author">Author:</span> {this.props.gist.owner.login ? this.props.gist.owner.login: 'Github'}</p>
      <p className="gigt-view"><a href={this.props.gist.html_url}>view on GitHub</a></p>
      <p className="gigt-file">Files:</p>
      <ul className="gigt-list-files">
        {
          Object.keys(this.props.gist.files).map(key => (
            <li key={key} className="gigt-list-item">
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