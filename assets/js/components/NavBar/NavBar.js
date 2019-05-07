import React, { Component } from 'react';
import { NavLink as RouterLinkNav , Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
      const { classes } = this.props;
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
                          <Tab  component={RouterLink}  to='/login' label="Sign In" />
                          <Tab  component={RouterLink}   to='/register'label="Sign Up" />
                    </Tabs>
                    {/*<Button*/}
                      {/*onClick={this.toggleActive}*/}
                      {/*className={isActive ?*/}
                        {/*'hamburger hamburger--squeeze is-active' : 'hamburger hamburger--squeeze'}*/}
                      {/*type="button">*/}
                        {/*<span className="hamburger-box">*/}
                          {/*<span className="hamburger-inner"></span>*/}
                        {/*</span>*/}
                    {/*</Button>*/}
                    {/*{isActive ?*/}
                      {/*<div className='Hover'>*/}
                        {/*<nav className='Hover--Navigation'>*/}
                            {/*<Button*/}
                              {/*component={RouterLinkNav}*/}
                              {/*exact*/}
                              {/*to='/'*/}
                              {/*className='NavBar-link'*/}
                              {/*activeClassName='active-link'*/}
                              {/*onClick={this.toggleActive}*/}
                            {/*>Home</Button>*/}
                            {/*<Button*/}
                                {/*component={RouterLinkNav}*/}
                                {/*to='/projects'*/}
                              {/*className='NavBar-link'*/}
                              {/*activeClassName='active-link'*/}
                              {/*onClick={this.toggleActive}*/}
                            {/*>Projects</Button>*/}
                            {/*<Button*/}
                                {/*component={RouterLinkNav}*/}
                                {/*to='/project-registration'*/}
                              {/*className='NavBar-link New-Project'*/}
                              {/*activeClassName='active-link'*/}
                              {/*onClick={this.toggleActive}*/}
                            {/*>New Project</Button>*/}
                        {/*</nav>*/}
                          {/*<Button*/}
                              {/*component={RouterLink}*/}
                              {/*onClick={this.toggleActive}*/}
                            {/*className='SignIn-link'*/}
                            {/*to='/login'>Sign In</Button>*/}
                          {/*<Button*/}
                              {/*component={RouterLink}*/}
                              {/*onClick={this.toggleActive}*/}
                            {/*className='SignIn-link'*/}
                            {/*to='/register'>Sign Up</Button>*/}
                        {/*</div> : null*/}
                    {/*}*/}

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

export default withStyles(styles)(NavBar);