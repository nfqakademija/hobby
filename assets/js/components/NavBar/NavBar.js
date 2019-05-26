import React, {Component} from 'react';
import {NavLink as RouterLinkNav, Link as RouterLink, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {onLogOut as Logout} from '../../thunks/logoutThunk';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.scss';

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
    const {location} = this.props;
    const {isAuth} = this.props.auth;
    const {showMenu} = this.state;
    return (
        <MuiThemeProvider theme={theme}>
          <div className='root'>
            <AppBar className='menubar'>
              <Toolbar>
                <Button
                    className='title'
                    color="secondary"
                        component={RouterLinkNav} to='/' >
                  HobbyCraft
                </Button>

                <div className='sectionMobile'>
                  <IconButton className='IconMobile'>
                    <MenuIcon onClick={this.onMenuShow}/>
                  </IconButton>
                  {showMenu ? <div onClick={this.onMenuShow} className='mobileMeniu'>
                    {isAuth ?
                        <Button
                            className='MobileButton'
                            component={RouterLinkNav}
                            exact
                            to='/projects'>
                          Discover Projects
                        </Button>
                        :
                        < Button
                            className='MobileButton'
                            component={RouterLinkNav}
                            exact
                            to='/'>
                          Discover
                        </Button>
                    }
                    {isAuth ?
                        <Button
                            className='MobileButton'
                            component={RouterLinkNav}
                            to='/project-registration'>Create
                          a Project</Button>
                        :
                        <Button
                            className='MobileButton'
                            component={RouterLinkNav}
                            to='/register'>Sign
                          Up With Email</Button>
                    }
                    {isAuth ?
                        <Button
                            className='MobileButton'
                            component={RouterLinkNav}
                            to='/user'>{this.props.auth.email} {this.props.auth.amount}€</Button>
                        :
                        <Button
                            className='MobileButton'
                            component={RouterLinkNav}
                            to="/about">
                          About Us
                        </Button>
                    }

                  </div> : null}
                </div>

                <div className='grow'/>
                <div className='sectionDesktop'>
                  {isAuth ?
                      < Button
                          className={'/projects' === location.pathname ? 'buttonSingUp' : 'button'}
                          component={RouterLinkNav}
                          exact
                          to='/projects'>
                        Discover Projects
                      </Button>
                      :
                      < Button
                          className={'/' === location.pathname ? 'buttonSingUp' : 'button'}
                          component={RouterLinkNav}
                          exact
                          to='/'>
                        Discover
                      </Button>}
                  {isAuth ?
                      <Button
                          className={'/project-registration' === location.pathname ? 'buttonSingUp' : 'button'}
                          component={RouterLinkNav}
                          to='/project-registration'>Create
                        a Project</Button>
                      :
                      <Button
                          className={'/register' === location.pathname ? 'buttonSingUp' : 'button'}
                          component={RouterLinkNav}
                          to='/register'>Sign
                        Up With Email</Button>
                  }
                  {isAuth ?
                      <Button
                          className={'/user' === location.pathname ? 'buttonSingUp' :'button'}
                          component={RouterLinkNav}
                          to='/user'>{this.props.auth.email} {this.props.auth.amount}€</Button>
                      :
                      <Button
                          className={'/about' === location.pathname ? 'buttonSingUp' : 'button'}
                          component={RouterLinkNav}
                          to="/about">
                        About Us
                      </Button>
                  }
                </div>
                <div className='sectionMobile'>
                  <Button color='secondary' className='titleMobile' component={RouterLinkNav} to='/'>
                    HobbyCraft
                  </Button>
                </div>

                <div className='grow'/>
                <div className='sectionDesktop'>
                  {isAuth ?
                      < Button className='button' onClick={this.onLogOutToggle} to='/logout'>
                        Logout
                      </Button>
                      :
                      < Button className='button' component={RouterLink} to='/login'>
                        Sign In
                      </Button>
                  }
                </div>

                <div className='sectionMobile'>
                  {isAuth ?
                      < Button className='button' onClick={this.onLogOutToggle} to='/logout'>
                        Logout
                      </Button>
                      :
                      < Button className='button' component={RouterLink} to='/login'>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));