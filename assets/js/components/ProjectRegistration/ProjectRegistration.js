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
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Snackbar from '../Snackbar/snackbar';

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
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit *8,
    },
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  textField: {
    height: 'auto',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    height: 50,
  },
});

class ProjectRegistration extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.projectRegister, this.props.history, this.props.auth.email)
  }

  render() {
    const {
      hobbyName,
      description,
      amount,
      loading,
      error,
    } =this.props.projectRegister;
    const {onInputChange} = this.props;
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <main className={classes.main}>
            <Paper className={classes.paper}>
              <CssBaseline />
              <Typography
                  variant="h5"
                  gutterBottom
                  align="center">Register Your Hobby
              </Typography>

              {error ? <Snackbar
                  error={error}
                  open={this.state.open}
                  onClose={this.handleClose}
              /> : null}

              <form
                  onSubmit={this.onFormSubmit}
                  className={classes.container}
                  noValidate autoComplete="off">
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
                    name='description'
                    value={description}
                    onChange={onInputChange}
                    multiline
                    fullWidth
                    rowsMax="10"
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
                    className={classes.submit}
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
          </main>
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