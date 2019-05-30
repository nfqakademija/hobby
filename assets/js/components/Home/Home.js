import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Home.scss';
import Button from "@material-ui/core/Button";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import logo from '../../friends.png';
import Paper from "@material-ui/core/es/Paper/Paper";

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
                  <div className="Container">
                        <div className="Message-box">
                      <div className='Message-Title'>
                          A New and Better way to engange and retain employees
                      </div>
                      <div className='Message-Subheading'>
                          Companies use HobbyCraft to organize their
                              employees hobby budget, its a perfect
                              internal croud funding system for you !
                      </div>
                      <MuiThemeProvider theme={theme}>
                          <div className="Button">
                              <Button
                                  radius={"25px"}
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
                      <img className="Img" src={logo} />
                  </div>

                  <div className={"Container"}>
                      <div className="Cards--inline">
                      <Paper className={"Card"}>
                          <p>Tai testas</p>
                      </Paper>

                      <Paper className={"Card"} >
                          <p>Tai testas 3</p>
                      </Paper>
                      </div>
                  </div>


              </div>
  );
};

export default Home;