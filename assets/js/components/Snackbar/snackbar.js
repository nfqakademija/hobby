import React  from 'react';
import Snack from "@material-ui/core/Snackbar";
import ErrorIcon from "@material-ui/icons/Error";
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
    root: {
        background: 'inherit',
    },
    icon: {
        fontSize:20,
        marginRight: 10,
    },
    message: {
        display: 'flex',
        fontSize:20,
        alignItems: 'center',
    },
});

        const Snackbar  = ( props, classes ) => {
            return (
                <div>
                    <Snack
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={props.open}
                        autoHideDuration={3000}
                        onClose={props.onClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                            classes: {
                                root: classes.root
                            },
                        }}

                        message={<span className={message}>
                        <ErrorIcon className={classes.icon}/>
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
        );
    }

export default (withStyles(styles)(Snackbar));