import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import Gists from './../gists/Gists';
import Gist from './../gist/Gist';
import Sidebar from './../sidebar/Sidebar';
import Main from './../main/Main';
import Home from './../home/Home';
import Header from './../header/Header';
import Create from './../create/Create';

class App extends Component {

  state = {
    gists: null
  }

  componentDidMount() {
    fetch('https://api.github.com/users/titoagudelo/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      })
  }

  render() {
    const { gists } = this.state;
    console.log(gists);
    return (
      <Router>
        <div className="app-container">
          <Header></Header>
          <section className="flex-flow">
            <Sidebar>
              {gists ? gists.map(gist => (
                <Link key={gist.id} className="item-link" to={`/gist/${gist.id}`}>
                  <Gists>
                    <p>Gigt: {gist.description || '[no description]'}</p>
                    <p className="gigt-username">By: {gist.owner.login || 'github'}</p>
                  </Gists>
                </Link>
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
              <Route path="/create" exact component={Create} />
            </Main>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
