import React, { Component, Fragment } from 'react';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ProjectsList from  './components/ProjectsList/ProjectsList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProjectRegistration from './components/ProjectRegistration/ProjectRegistration';
import ProjectInfo from './components/ProjectInfo/ProjectInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={ProjectsList}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/project-registration' component={ProjectRegistration}/>
            <Route path='/project/:id' component={ProjectInfo}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
