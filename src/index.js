import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './styles/index.css';
import Main from './dumbComponents/Main.js';
import NotFound from './dumbComponents/NotFound.js';
import Login from './smartComponents/Login.js';
import Profile from './smartComponents/Profile.js';
import News from './smartComponents/News.js';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


  ReactDOM.render(
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/news" component={News}/>
          <Route exact path="/*" component={NotFound}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
