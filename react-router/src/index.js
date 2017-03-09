import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Route , IndexRoute , hashHistory} from 'react-router'
import App from './app';
import About from './about'
import Repos from './repos'
import Home from './home'
import Repo from './repo'
ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/about" component={About}></Route>
                <Route path="/repos" component={Repos}>
                    <Route path="/repos/:username/:repoName" component={Repo}></Route>
                </Route>
            </Route>
        </Router>
    ),
  document.getElementById('root')
);
