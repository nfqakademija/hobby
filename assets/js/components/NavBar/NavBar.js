import React, { Component } from 'react';
import { NavLink as RouterLinkNav , Link as RouterLink } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {onLogOut as Logout} from '../../thunks/logoutThunk';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography'

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
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

};
class NavBar extends Component {
  state ={
      value: 0,
      anchorEl: null,
  }

    handleChange = (event, value) => {
        this.setState({ value });
    };


    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };


   render() {
      const { classes, onLogout } = this.props;
      const { anchorEl } = this.state;
      const { isAuth } = this.props.auth;
      const isMenuOpen = Boolean(anchorEl)

       const renderMenu = (
           <Menu
               anchorEl={anchorEl}
               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
               open={isMenuOpen}
               onClose={this.handleMenuClose}
           >
               <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
               <MenuItem
               //     onClick={() => {
               //     handleMenuClose();
               //     anotherfunctionCall();
               // }}
                   onClick={this.handleMenuClose}
                         component={RouterLink} to='/logout'>Logout</MenuItem>


           </Menu>
       );


      return (
          <MuiThemeProvider theme={theme}>
      <div className={classes.root} >
            <AppBar  position="static" color="default" >
                <Toolbar >
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button  component={RouterLinkNav} exact to='/'>Home</Button>
                        <Button  component={RouterLinkNav} to='/projects'>Projects</Button>
                        <Button  component={RouterLinkNav} to='/project-registration'>Create Project</Button>

                        {isAuth ? null :
                            <Button color='primary' variant="contained" component={RouterLink}  to='/register'>Sign Up</Button>
                        }
                        {isAuth ? <Button disabled  component={RouterLink}>{this.props.auth.email}  {this.props.auth.amount}€</Button>
                            :
                            <Button color='primary' variant="contained" component={RouterLink}  to='/login'>Sign In</Button>
                        }
                        {isAuth ? <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            > <AccountCircle/> </IconButton>
                            :
                            null
                        }
                    </div>
                </Toolbar>
            </AppBar>
          {renderMenu}
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