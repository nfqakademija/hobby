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
import Typography from '@material-ui/core/Typography'

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
        paddingLeft: 100,
        paddingRight: 100,
        position:"static",
        background:"#181818",

    },
    grow: {
        flexGrow: 1,
        align: 'center',
    },
    logo: {
        color: '#ffffff',
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
    }

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
                    {isAuth ?
                    <Toolbar>
                        <Typography variant="h6" className={classes.logo}>
                            HobbyCraft
                        </Typography>
                        <div className={classes.grow} />
                        <Button className={classes.button} component={RouterLinkNav} exact to='/'>
                            Discover
                        </Button>
                        <Button className={classes.buttonSingUp} component={RouterLink}  to='/register'>Sign Up With Email</Button>
                        <Button className={classes.button}>
                            About Us
                        </Button>
                        <div className={classes.grow} />
                        <Button className={classes.button} component={RouterLink}  to='/login'>
                            Sign In
                        </Button>
                    </Toolbar> : <Toolbar>
                            <Typography variant="h6" className={classes.logo}>
                                HobbyCraft
                            </Typography>
                            <div className={classes.grow} />
                            <Button className={classes.button} component={RouterLinkNav} to='/projects'>
                                Projects
                            </Button>
                            <Button className={classes.buttonSingUp} component={RouterLinkNav} to='/project-registration'>Create Project</Button>
                            <Button className={classes.button}>
                                About Us
                            </Button>
                            <div className={classes.grow} />
                            <Button className={classes.button} onClick={this.props.auth.onLogout} component={RouterLink} to='/logout'>
                                Logout
                            </Button>
                        </Toolbar>}
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
    onLogout: () => dispatch(Logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar));