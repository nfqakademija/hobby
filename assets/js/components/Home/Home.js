import React from 'react';
import {Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Home.scss';

const Home = ( ) => {
  return (
    <div className='Home'>
        <Paper elevation={2}>
            <Typography variant="h5" component="h3">This is a place for your hobby projects.</Typography>
          <Typography variant='subtitle1'  >To see projects, please go to{' '}
            <Link component={RouterLink} color="$link-color"  to='/projects'>Projects List</Link>
          </Typography>
          <Typography variant='subtitle1'>If you have an account please{' '}
            <Link component={RouterLink}  className='Link' to='/login'>Sing In</Link>
          </Typography>
          <Typography variant='subtitle1'>If you don't have an account please{' '}
            <Link component={RouterLink} className='Link' to='/register'>Sing Up</Link>
          </Typography>
        </Paper>
    </div>
  );
};

export default Home;