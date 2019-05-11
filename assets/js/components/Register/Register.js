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
});


class Register extends Component {
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
            <Paper elevation={8} className='Register'>
              <Typography
                  variant="h5"
                  gutterBottom
                  align="center">Sign Up
              </Typography>
              {error ? <p style={{
                color: 'red',
                textAlign: 'center'
              }}>{error}</p> : null}
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
                    className={classes.button}
                    margin="normal"
                    fullWidth
                    gutterBottom
                    type="submit">
                  {loading ? <Loader color={'#fff'} h={15} /> : 'Sign Up'}
                </Button>
              </form>
            </Paper>,
            <Typography
                variant="caption"
                gutterBottom
                align="center" >
              Already have an account?{' '}
              <Link
                  component={RouterLink}
                  color={'secondary'}
                  to='/login'>
                Sign In
              </Link>
            </Typography>
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