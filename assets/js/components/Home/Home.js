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

        <div className='Home'>
              <div className='Container'>
                  <div className='Title'>
                    <Typography
                    variant={"h3"}
                    >A New and Better way to engange and retain employees
                    </Typography>
                  </div>
                <div className='Subheading'>
                    <Typography variant="subheading" >Companies use HobbyCraft to organize their
                        employees hobby budget, its a perfect
                        internal croud funding system for you !
                    </Typography>
                </div>
            <MuiThemeProvider theme={theme}>
                <div className="Button">
                  <Button
                      className='button'
                      component={RouterLink}
                      variant="contained"
                      color="primary"
                      size="large"
                      to='/login'
                  ><Typography color="secondary" >Get Started</Typography></Button>
                </div>
      </MuiThemeProvider>


              </div>
        </div>
  );
};

export default Home;