import React, { Component } from 'react';
import { NavLink as RouterLinkNav , Link as RouterLink } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
        position:"static",
        background:"#181818",

    },
    grow: {
        flexGrow: 1,
        align: 'center',
    },
    title: {
        color: '#ffffff',
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    button: {
        color: '#A4A4A4',
        '&:hover': {
            color: '#ffffff',
        },
        margin: 'auto',
        paddingLeft:  20,
        paddingRight: 20,
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
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    titleMobile: {
        color: '#ffffff',
    },
    IconMobile: {
        color:"#ffffff",
    },
};

class NavBar extends Component {
  state ={
      value: 0,
  }

    handleChange = (event, value) => {
        this.setState({ value });
    };



   render() {
      const { classes } = this.props;
      const { isAuth } = this.props.auth;

      return (
          <MuiThemeProvider theme={theme}>
            <div className={classes.root} >
                <AppBar className={classes.menubar} >
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                HobbyCraft
                            </Typography>

                            <div className={classes.sectionMobile}>
                                <IconButton className={classes.IconMobile}>
                                    <MenuIcon/>
                                </IconButton>
                            </div>

                            <div className={classes.grow}  />
                            <div className={classes.sectionDesktop} >
                                {isAuth ?
                                    < Button className={classes.button} component={RouterLinkNav} exact to='/projects'>
                                        Discover Projects
                                    </Button>
                                    :
                                    < Button className={classes.button} component={RouterLinkNav} exact to='/'>
                                        Discover
                                    </Button> }
                                {isAuth ?
                                    <Button className={classes.buttonSingUp} component={RouterLinkNav} to='/project-registration'>Create a Project</Button>
                                    :
                                    <Button className={classes.buttonSingUp} component={RouterLinkNav} to='/register'>Sign
                                        Up With Email</Button>
                                }
                                {isAuth ?
                                    <Button className={classes.button} component={RouterLinkNav} to='/user'>{this.props.auth.email}  {this.props.auth.amount}€</Button>
                                    :
                                    <Button className={classes.button}>
                                        About Us
                                    </Button>
                                }
                            </div>
                            <div className={classes.sectionMobile}>
                                <Typography variant="h6" className={classes.titleMobile}>
                                    HobbyCraft
                                </Typography>
                            </div>

                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                {isAuth  ?
                                    < Button className = {classes.button} onClick={this.props.onLogoutClick} to='/logout'>
                                    Logout
                                    </Button>
                                    :
                                    < Button className = {classes.button} component={RouterLink}  to='/login'>
                                        Sign In
                                    </Button>
                                }
                            </div>

                            <div className={classes.sectionMobile}>
                                <IconButton className={classes.IconMobile}>
                                    <SearchIcon />
                                </IconButton>
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
    onLogoutClick: () => dispatch(Logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar));