import React from 'react';
import {Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
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
            main: '#0044ff',
        },
    },
});

const Home = ( ) => {
  return (
      <MuiThemeProvider theme={theme}>
        <div className='Home'>
                <Typography
                    variant="h3"
                    gutterBottom
                    align="Left"
                >A New and Better way to engange<br/>
                and retain employs
                </Typography>
            <Typography
                variant="subheading"
                gutterBottom
                align="Left"
            >Companies use HobbyCraft to organize their<br/>
                employees hobby budget, its a perfect<br/>
                internal croud funding system for you !
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
            >Large</Button>

        </div>
      </MuiThemeProvider>
  );
};

export default Home;