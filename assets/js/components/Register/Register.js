import React, {Component} from 'react';
import Loader from '../Loader/Loader';
import {Link as RouterLink } from "react-router-dom";
import './Register.scss'
import * as actions from "../../actions/registerActions";
import {onRegisterFormSubmit} from '../../thunks/registerThunk';
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA7925',
    },
    secondary: {
      main: '#0044ff',
    },
    error: {
      main: '#ffffff',
    },
  },
});

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  textField: {
    height: 50,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    height: 50,
  },
  root: {
    background: theme.palette.error.dark,
  },
  icon: {
    fontSize:20,
    marginRight: 10,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});


class Register extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.register, this.props.history);
  }


  render() {
    const {username, email, password, password2, error, loading,} = this.props.register;
    const {onInputChange} = this.props;
    const { classes } = this.props;
    return (
          <MuiThemeProvider theme={theme} >
            <main className={classes.main}>
              <Paper className={classes.paper}>
                <CssBaseline />
              <Typography
                  variant="h5"
                  gutterBottom
                  align="center">Sign Up
              </Typography>
              {error ? <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  open={this.state.open}
                  autoHideDuration={3000}
                  onClose={this.handleClose}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                      classes: {
                          root: classes.root
                      },
                  }}
                  message={<span className={classes.message}>
                    <ErrorIcon className={classes.icon}/>
                    {error}
                  </span>}
                  action={[
                    <Tooltip title="Close">
                      <IconButton aria-label="Close"
                                  key="close"
                                  color="inherit"
                                  className={classes.close}
                                  onClick={this.handleClose}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
              /> : null}
              <form onSubmit={this.onFormSubmit}  className={classes.container}  noValidate autoComplete="off">
                <TextField
                      type="text"
                      name='username'
                      value={username}
                      onChange={onInputChange}
                      fullWidth
                      required
                      label="Please enter your name"
                      margin="normal"
                      variant="outlined"
                      className={classes.textField}
                  />
                <TextField
                    type="text"
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    fullWidth
                    required
                    label="Please enter your email"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                />

                <TextField
                    type="password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    fullWidth
                    required
                    label="Password"
                    margin="normal"
                    color="secondary"
                    variant="outlined"
                    className={classes.textField}
                />
                <TextField
                    type="password"
                    name='password2'
                    value={password2}
                    onChange={onInputChange}
                    fullWidth
                    required
                    label="Repeat Password"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                />
                <Button
                    variant="contained"
                    color="primary"
                    textColor="secondary"
                    className={classes.submit}
                    margin="normal"
                    fullWidth
                    gutterBottom
                    onClick={this.handleClick}
                    type="submit">
                  {loading ? <Loader color={'#fff'} h={15} /> :
                      <Typography color="error" >Sign up</Typography> }
                </Button>
              </form>
            </Paper>
              <div className={"subheading"}>
                Already have an account?{' '}
                <Link
                    component={RouterLink}
                    color={'secondary'}
                    to='/login'>
                  Sign In
                </Link>
              </div>
            </main>
          </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.register
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onFormSubmit: (user, history) => dispatch(onRegisterFormSubmit(user, history))
});
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Register));