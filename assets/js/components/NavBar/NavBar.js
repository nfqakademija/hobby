import React, { Component } from 'react';
import { NavLink as RouterLinkNav , Link as RouterLink } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {onLogOut as Logout} from '../../thunks/logoutThunk';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EA7925',
        },
        secondary: {
            main: '#0044ff',
        },
    },
});

const styles = {
    root: {
        flexGrow: 1,
    },
    Tabs:{
    width: '100%',
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
      const { classes, onLogout } = this.props;
      const {email, isAuth} = this.props.auth;
      return (
          <MuiThemeProvider theme={theme}>
      <Grid
          container className={classes.root}
      >
            <AppBar  color="default" elevation={8} >
                <Toolbar >
                    <Tabs  className={classes.Tabs}
                           value={this.state.value}
                           onChange={this.handleChange}
                           componentColor="primary"
                           indicatorColor="primary"
                           textColor="primary"
                           centered
                    >
                          <Tab  component={RouterLinkNav} exact to='/' label="Home" />
                          <Tab  component={RouterLinkNav} to='/projects'   label="Projects" />
                          <Tab  component={RouterLinkNav} to='/project-registration' label="Create Project" />
                        {isAuth ? <Tab  component={RouterLink}  to='/user' label={email} /> :
                            <Tab  component={RouterLink}  to='/login' label="Sign In" />
                        }
                        {isAuth ? <Tab onClick={onLogout}  component={RouterLink}  to='/logout' label='Logout' /> :
                            <Tab  component={RouterLink}  to='/register' label="Sign Up" />
                        }

                    </Tabs>


                </Toolbar>
            </AppBar>
      </Grid>
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