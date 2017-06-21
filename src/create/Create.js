import React, { Component } from 'react';
import './Create.css';

class CreateGigt extends Component {

  // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            response: null
        }
    }

    _handleSubmit (e) {
        //var fileName = this.fileName ? this.fileName: 'file1.txt';
        var fileContent =  this.file ? this.file : 'No content';
		var dataGigt = {
            description: this.description,
            public: true,
            files: {
                file1: {
                    content: fileContent
                }
            }
        }
        e.preventDefault();


		return fetch('https://api.github.com/users/titoagudelo/gists', {method: 'POST', data: dataGigt })
      		.then(res => res.json())
            .then(response => {
                this.setState({ response })
            })
	}

    render(){
        return <form onSubmit={this._handleSubmit}>
            <h2>Create a new Gigt</h2>
            <div className="group-form">
                <label>Description</label>
                <textarea value={this.state.description} required></textarea>
            </div>
            <div className="group-form">
                <label>File Name</label>
                <input value={this.state.fileName}
                required />
            </div>
            <div className="group-form">
                <label>File Content</label>
                <textarea value={this.state.file} required></textarea>
            </div>
            <button type="submit">Create</button>
        </form>
    }
}

export default CreateGigt;