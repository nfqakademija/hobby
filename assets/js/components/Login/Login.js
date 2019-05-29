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
import Snackbar from '../Snackbar/snackbar';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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

    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: '#EA7925',
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
});

class Login extends Component {
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
        this.props.onFormSubmit(this.props.login, this.props.history)
    }

    render() {
        const { email, password, error, loading } = this.props.login
        const {onInputChange} = this.props;
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <main className={classes.main}>
                    <Paper className={classes.paper}>
                        <CssBaseline />
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography
                            component="h1" variant="h5">
                            Sign In
                        </Typography>

                        {error ? <Snackbar
                            error={error}
                            open={this.state.open}
                            onClose={this.handleClose}
                        /> : null}

                        <form className={classes.form}
                              onSubmit={this.onFormSubmit}
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
                                className={classes.submit}
                                margin="normal"
                                fullWidth
                                gutterBottom
                                onClick={this.handleClick}
                                type="submit">
                                {loading ? <Loader color={'#fff'} h={15} /> :
                                    <Typography color="error" >Sign In</Typography>}
                            </Button>
                        </form>
                    </Paper>
                    <div className={"subheading"}>
                        If you don't have an account, please{' '}
                        <Link
                            component={RouterLink}
                            color={'secondary'}
                            to='/Register'>
                            Sign Up
                        </Link>
                    </div>
                </main>
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