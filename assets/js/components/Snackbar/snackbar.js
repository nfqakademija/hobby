import React  from 'react';
import Snack from "@material-ui/core/Snackbar";
import ErrorIcon from "@material-ui/icons/Error";
import {withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
        background: '#d32f2f',
    },
    MobibleSnackbar:{
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    DesktopSnackbar:{
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
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

        const Snackbar  = (props) => {

        return (
                <div>
                    <div className={props.classes.DesktopSnackbar}>
                        <Snack
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={props.open}
                        autoHideDuration={2000}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                            classes: { root: props.classes.root},
                        }}
                        message={<span className={props.classes.message}>
                            <ErrorIcon className={props.classes.icon}/>
                            {props.error}
                           </span>}
                        action={[
                            <Tooltip title="Close">
                                <IconButton aria-label="Close"
                                            key="close"
                                            color="inherit"
                                            onClick={props.onClose}>
                                    <CloseIcon/>
                                </IconButton>
                            </Tooltip>
                        ]}
                    />
                    </div>
                    <div className={props.classes.MobibleSnackbar}>
                        <Snack
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            open={props.open}
                            onClose={props.onClose}
                            autoHideDuration={3000}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                                classes: { root: props.classes.root},
                            }}

                            message={<span className={props.classes.message}>
                            <ErrorIcon className={props.classes.icon}/>
                                {props.error}
                           </span>}
                            action={[
                                <Tooltip title="Close">
                                    <IconButton aria-label="Close"
                                                key="close"
                                                color="inherit"
                                                onClick={props.onClose}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Tooltip>
                            ]}
                        />
                    </div>
                </div>
        );
    }

export default (withStyles(styles)(Snackbar));