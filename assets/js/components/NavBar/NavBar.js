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
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA7925',
    },
  },
});

const styles = {
  root: {
    width: '100%',
  },
  menubar: {
    position: "static",
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
    backgroundColor: "#EA7925",
    borderRadius: 25,
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
  IconMobile: {
    color: "#ffffff",
  },
  MobileMenu: {
    position: 'fixed',
    top: '56px',
    right: 0,
    paddingTop: '20px',
    zIndex: 1000,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0, 0.75)',

  }
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

  onMenuShow = () => this.setState({showMenu: !this.state.showMenu})

  render() {
    const {classes, location} = this.props;
    const {isAuth} = this.props.auth;
    const {showMenu} = this.state;
    return (
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar className={classes.menubar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  HobbyCraft
                </Typography>

                <div className={classes.sectionMobile}>
                  <IconButton className={classes.IconMobile}>
                    <MenuIcon onClick={this.onMenuShow}/>
                  </IconButton>
                  {showMenu ? <div onClick={this.onMenuShow} className={classes.MobileMenu}>
                    {isAuth ?
                        <Button
                            className={classes.MobileButton}
                            component={RouterLinkNav}
                            exact
                            to='/projects'>
                          Discover Projects
                        </Button>
                        :
                        < Button
                            className={classes.MobileButton}
                            component={RouterLinkNav}
                            exact
                            to='/'>
                          Discover
                        </Button>
                    }
                    {isAuth ?
                        <Button
                            className={classes.MobileButton}
                            component={RouterLinkNav}
                            to='/project-registration'>Create
                          a Project</Button>
                        :
                        <Button
                            className={classes.MobileButton}
                            component={RouterLinkNav}
                            to='/register'>Sign
                          Up With Email</Button>
                    }
                    {isAuth ?
                        <Button
                            className={classes.MobileButton}
                            component={RouterLinkNav}
                            to='/user'>{this.props.auth.email} {this.props.auth.amount}€</Button>
                        :
                        <Button
                            className={classes.MobileButton}
                            component={RouterLinkNav}
                            to="/about">
                          About Us
                        </Button>
                    }

                  </div> : null}
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
                </div>
                <div className={classes.sectionMobile}>
                  <Typography variant="h6" className={classes.titleMobile}>
                    HobbyCraft
                  </Typography>
                </div>

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
                      < Button className={classes.button} onClick={this.onLogOutToggle} to='/logout'>
                        Logout
                      </Button>
                      :
                      < Button className={classes.button} component={RouterLink} to='/login'>
                        Sign In
                      </Button>
                  }
                </div>

              </Toolbar>
            </AppBar>
          </div>
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