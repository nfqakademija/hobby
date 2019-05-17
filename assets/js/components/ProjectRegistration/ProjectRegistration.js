import React, {Component} from 'react';
import './ProjectRegistration.scss';
import Loader from '../Loader/Loader';
import {connect} from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import * as actions from '../../actions/projectRegisterActions';
import {onProjectRegisterFormSubmit} from '../../thunks/projectRegisterThunk';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

class ProjectRegistration extends Component {
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
    this.props.onFormSubmit(this.props.projectRegister, this.props.history, this.props.auth.email)
  }

  render() {
    const {
      username,
      hobbyName,
      description,
      amount,
      loading,
      error,
    } =this.props.projectRegister;
    const {onInputChange} = this.props;
    const { classes } = this.props;
    const { email } =this.props.auth
    return (
        <MuiThemeProvider theme={theme}>
          <Paper elevation={8} className='ProjectForm'>
            <Typography
                variant="h5"
                gutterBottom
                align="center">Register Your Hobby
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
                  name='hobbyName'
                  value={hobbyName}
                  onChange={onInputChange}
                  fullWidth
                  required
                  label="Please enter your hobby name"
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
              />
              <TextField
                  type="email"
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
                  name='description'
                  value={description}
                  onChange={onInputChange}
                  multiline
                  fullWidth
                  rowsMax="3"
                  className={classes.textField}
                  label="Please describe it"
                  margin="normal"
                  variant="outlined"
              />
              <TextField
                  type="number"
                  name='amount'
                  min={1}
                  value={amount}
                  onChange={onInputChange}
                  fullWidth
                  required
                  label="Please enter amount for your needs"
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
                {loading ? <Loader textColor="secondary" color={'#fff'} h={15} /> :
                    <Typography color="error" >Place your hobby</Typography>
                    }
              </Button>
            </form>
          </Paper>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectRegister: state.projectRegister,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onDateChange: (date) => dispatch(actions.onDateChange(date)),
  onFormSubmit: (projectInfo, history, email)=>dispatch(onProjectRegisterFormSubmit(projectInfo,history,email))
});
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ProjectRegistration));