import React, {Component} from 'react';
import {NavLink as RouterLinkNav, Link as RouterLink, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {onLogOut as Logout} from '../../thunks/logoutThunk';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import View from '@material-ui/icons/ViewModule';
import AddIcon from '@material-ui/icons/LibraryAdd';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA7925',
    },
    secondary:{
      main: '#ffffff',
    }
  },
});

const styles = {
  root: {
    width: '100%',
  },

  MobileNav:{
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },


  menubar: {
    paddingLeft: "10%",
    paddingRight: "10%",
    position: 'static',
    background: "#181818",

  },
  grow: {
    flexGrow: 1,
    align: 'center',
  },
  title: {
    color: '#ffffff',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  button: {
    color: '#A4A4A4',
    '&:hover': {
      color: '#ffffff',
    },
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    textDecoration: 'none'
  },
  link: {
    color: '#A4A4A4',
    '&:hover': {
      color: '#ffffff',
    },
    margin: 'auto',
    padding: '6px 20px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  MobileButton: {
    display: 'block',
    color: '#ffffff',
    '&:hover': {
      color: '#A4A4A4',
    },
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: '20px',
    textAlign: 'center'
  },
  buttonSingUp: {
    color: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#EA7925",
    fontWeight: 600,
    '&:hover': {
      backgroundColor: "#A15421",
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  titleMobile: {
    color: '#ffffff',
  },
};

class NavBar extends Component {
  state = {
    value: 0,
    showMenu: false
  }

  handleChange = (event, value) => {
    this.setState({value});
  };

  onLogOutToggle = () => this.props.onLogoutClick(this.props.history)


  render() {
    const {classes, location} = this.props;
    const {isAuth, role} = this.props.auth;
    return (
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar className={classes.menubar}>
              <Toolbar>
                <Button
                    className={classes.title}
                    color="secondary"
                    component={RouterLinkNav} to='/' >
                  HobbyCraft
                </Button>
                <div className={classes.sectionMobile}>
                  {isAuth ?
                  <Button color='secondary' className={classes.titleMobile} component={RouterLinkNav} to='/'>
                    HobbyCraft
                  </Button> : null
                  }
                </div>

                <div className={classes.grow}/>
                <div className={classes.sectionDesktop}>
                  {isAuth ?
                      < Button
                          className={'/projects' === location.pathname ? classes.buttonSingUp : classes.button}
                          component={RouterLinkNav}
                          exact
                          to='/projects'>
                        Discover Projects
                      </Button>
                      :
                      < Button
                          className={'/' === location.pathname ? classes.buttonSingUp : classes.button}
                          component={RouterLinkNav}
                          exact
                          to='/'>
                        Discover
                      </Button>}
                  {isAuth ?
                      <Button
                          className={'/project-registration' === location.pathname ? classes.buttonSingUp : classes.button}
                          component={RouterLinkNav}
                          to='/project-registration'>Create
                        a Project</Button>
                      :
                      <Button
                          className={'/register' === location.pathname ? classes.buttonSingUp : classes.button}
                          component={RouterLinkNav}
                          to='/register'>Sign
                        Up With Email</Button>
                  }
                  {isAuth ?
                      <Button
                          className={'/user' === location.pathname ? classes.buttonSingUp : classes.button}
                          component={RouterLinkNav}
                          to='/user'>{this.props.auth.email} {this.props.auth.amount}€</Button>
                      :
                      <Button
                          className={'/about' === location.pathname ? classes.buttonSingUp : classes.button}
                          component={RouterLinkNav}
                          to="/about">
                        About Us
                      </Button>
                  }

                  {role === 1 ?
                      <Button href={'/admin'} className={classes.button} >Admin</Button>
                      : null
                  }

                </div>

                {isAuth ?
                    null: <div className={classes.sectionMobile}>
                      <Button color='secondary' className={classes.titleMobile} component={RouterLinkNav} to='/'>
                        HobbyCraft
                      </Button>
                    </div>
                }


                <div className={classes.grow}/>
                <div className={classes.sectionDesktop}>
                  {isAuth ?
                      < Button className={classes.button} onClick={this.onLogOutToggle} to='/logout'>
                        Logout
                      </Button>
                      :
                      < Button className={classes.button} component={RouterLink} to='/login'>
                        Sign In
                      </Button>
                  }
                </div>
                  <div className={classes.sectionMobile}>
                  {isAuth ?
                      <div className={classes.sectionMobile}>
                          <Button color='secondary' className={classes.titleMobile} onClick={this.onLogOutToggle}
                                  to='/logout'>
                              Logout
                          </Button>
                      </div> : null
                  }
                  </div>
              </Toolbar>
            </AppBar>
          </div>

          {isAuth ?
              <BottomNavigation
                  showLabels
                  className={classes.MobileNav}>
                <BottomNavigationAction label="Home" component={RouterLink} to='/' icon={<HomeIcon/>}/>
                <BottomNavigationAction label="Discover"  component={RouterLink} to='/projects' icon={<View/>}/>
                <BottomNavigationAction label="Create" component={RouterLink} to='/project-registration' icon={<AddIcon/>}/>
                {role === 1 ? <BottomNavigationAction label="Admin" href={'/admin'} icon={<PersonIcon/>} /> :
                              <BottomNavigationAction label={this.props.auth.email} component={RouterLink} to='/user' icon={<PersonIcon/>}/>
                }
              </BottomNavigation>
              :
              <BottomNavigation
                  showLabels
                  className={classes.MobileNav}>
                <BottomNavigationAction label="Home"   component={RouterLink} to='/' icon={<HomeIcon/>}/>
                <BottomNavigationAction label="Sign Up" component={RouterLink} to='/register' icon={<PersonAddIcon/>}/>
                <BottomNavigationAction label="Sign In" component={RouterLink} to='/login' icon={<PersonIcon/>}/>
              </BottomNavigation>
          }
        </MuiThemeProvider>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick: (history) => dispatch(Logout(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(NavBar)));