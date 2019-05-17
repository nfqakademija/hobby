import React, {Component} from 'react';
import {Link as RouterLink } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/loginActions';
import { onFormSubmit } from '../../thunks/loginThunk';
import Loader from '../Loader/Loader';
import './Login.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';



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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: 50,
  },
  button: {
    margin: theme.spacing.unit,
    justify: theme.center,
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

class Login extends Component {
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
    this.props.onFormSubmit(this.props.login, this.props.history)
  }


  render() {
    const { email, password, error, loading } = this.props.login
    const {onInputChange} = this.props;
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <Paper elevation={8} className='Login'>
            <Typography
                variant="h5"
                gutterBottom
                align="center">Sign In
            </Typography>
            {error ? <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={this.state.open}
                autoHideDuration={6000}
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
                  </Tooltip>,
                ]}
            /> : null}
            <form
                onSubmit={this.onFormSubmit}
                className={classes.container}
                noValidate autoComplete="off">
              <TextField
                  type="email"
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  fullWidth
                  required
                  label="Email"
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
                  variant="outlined"
                  className={classes.textField}
              />
              <Button
                  variant="contained"
                  color="primary"
                  textColor="secondary"
                  className={classes.button}
                  margin="normal"
                  fullWidth
                  gutterBottom
                  onClick={this.handleClick}
                  type="submit">
                {loading ? <Loader color={'#fff'} h={15} /> :
                    <Typography color="error" >Sign In</Typography>}
              </Button>
            </form>
          </Paper>,
          <Typography
              variant="caption"
              gutterBottom
              align="center" >
            If you don't have an account, please{' '}
            <Link
                component={RouterLink}
                color={'secondary'}
                to='/Register'>
              Sign Up
            </Link>
          </Typography>
        </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onFormSubmit: (user, history) =>dispatch(onFormSubmit(user,history)),
});
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Login));