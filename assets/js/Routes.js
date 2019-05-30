import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserFromLS} from './storage/storage';
import {authUser} from './actions/authActions';
import {setProjectList} from './thunks/getProjects';
import {amountUpdate} from './thunks/amountUpdateThunk'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ProjectsList from  './components/ProjectsList/ProjectsList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProjectRegistration from './components/ProjectRegistration/ProjectRegistration';
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import User from './components/User/User';
import About from './components/About/about';



class Routes extends Component {
  componentDidMount() {
    const user = getUserFromLS();
    user ? this.props.onLoadAuth(user) : null
    user ? this.props.onLoadProjects() : null
    user ? this.props.onUpdateWallet() : null
  }

  render() {
    const {isAuth} =this.props.auth
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={ProjectsList}/>
            <Route path='/login' component={Login}/>
            <Route path='/register/:token' component={Register}/>
            <Route path='/register/' component={Register}/>
            <Route path='/user' component={User} />
            {/*<Route path='/admin' />*/}
            <Route path='/project/:id' component={ProjectInfo}/>
            {isAuth ? <Route path='/project-registration' component={ProjectRegistration}/> : <Redirect to='/login'/>}

          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoadAuth: (user) => dispatch(authUser(user)),
  onLoadProjects: () => dispatch(setProjectList()),
  onUpdateWallet: () => dispatch(amountUpdate())
});

export default connect(mapStateToProps,mapDispatchToProps)(Routes);
