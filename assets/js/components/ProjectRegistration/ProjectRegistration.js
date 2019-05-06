import React, {Component} from 'react';
import './ProjectRegistration.scss';
import Loader from '../Loader/Loader';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as actions from '../../actions/projectRegisterActions';
import {onProjectRegisterFormSubmit} from '../../thunks/projectRegisterThunk';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
  },
  button: {
    margin: theme.spacing.unit,
    justify: theme.center,
  },
});

class ProjectRegistration extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.projectRegister, this.props.history)
  }

  render() {
    const {
      username,
      hobbyName,
      email,
      description,
      amount,
      endDate,
      loading,
      error
    } =this.props.projectRegister;
    const {onInputChange, onDateChange} = this.props;
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <Paper elevation={8} className='ProjectForm'>
            <Typography
                variant="h5"
                gutterBottom
                align="center">Register Your Hobby
            </Typography>
            {error ? <p style={{
              color: 'red',
              textAlign: 'center'
            }}>{error}</p> : null}
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
              <DatePicker
                onChange={onDateChange}
                selected={endDate}
                placeholderText="Select project end date"
                dateFormat="yyyy MM dd"
                minDate={new Date()}
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
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  margin="normal"
                  gutterBottom
                  fullWidth
              >
                {loading ? <Loader color={'#fff'} h={15} /> : 'Place your hobby'}
              </Button>
            </form>
          </Paper>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectRegister: state.projectRegister
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onDateChange: (date) => dispatch(actions.onDateChange(date)),
  onFormSubmit: (projectInfo, history)=>dispatch(onProjectRegisterFormSubmit(projectInfo,history))
});
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ProjectRegistration));