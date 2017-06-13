import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import Gists from './../gists/Gists';
import Gist from './../gist/Gist';
import Sidebar from './../sidebar/Sidebar';
import Main from './../main/Main';
import Home from './../home/Home';

class App extends Component {

  state = {
    gists: null
  }

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      })
  }

  render() {
    const { gists } = this.state;
    return (
      <Router>
        <div className="app-container">
          <Sidebar>
            {gists ? gists.map(gist => (
              <Gists key={gist.id}>
                  <Link to={`/gist/${gist.id}`}>
                      {gist.description || '[no description]'}
                  </Link>
              </Gists>
              )) : (<p>Loading…</p>)
            }
          </Sidebar>
          <Main>
            <Route path="/" exact component={Home} />
            {
              gists && (
                <Route path="/gist/:gistId" render={
                  ({ match }) => (
                      <Gist gist={gists.find(g => g.id === match.params.gistId)} />
                  )
                } />
              )
            }
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;
