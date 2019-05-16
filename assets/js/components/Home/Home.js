import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Home.scss';
import Button from "@material-ui/core/Button";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EA7925',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

const Home = ( ) => {
  return (
      <MuiThemeProvider theme={theme}>
        <div className='Home'>
            <div className='Home-floatLeft'>
                <Typography
                    variant="h3"
                    gutterBottom
                    align="Left"
                >A New and Better way to engange<br/>
                and retain employees
                </Typography>
            <Typography
                variant="subheading"
                gutterBottom
                align="Left"
            >Companies use HobbyCraft to organize their<br/>
                employees hobby budget, its a perfect<br/>
                internal croud funding system for you !
            </Typography>
        </div>
          <Button
              className='Home'
              component={RouterLink}
              variant="contained"
              color="primary"
              size="large"
              to='/login'
          ><Typography color="secondary" >Get Started</Typography></Button>
            </div>
      </MuiThemeProvider>
  );
};

export default Home;