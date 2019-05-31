import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Home.scss';
import Button from "@material-ui/core/Button";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import logo from '../Images/Friends.png';
import TeamImage from "../Images/team.png";
import ColleagueImage from "../Images/colleague.png";
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

                  <div className="Container">
                      <div className="Container--inline">
                      <Paper className="Card-Home">
                          <img className="Img-card" src={TeamImage} />
                          <div className='Message-Title-Card'>
                              Build employees up
                          </div>
                          <div className='Message-Subheading-Card'>
                              Reward frequency is more important than size.Top employers create an environment using HobyCraft where employees feel connected to the organization.
                          </div>
                      </Paper>

                      <Paper className="Card-Home" >
                          <img className="Img-card-2" src={ColleagueImage} />
                          <div className='Message-Title-Card'>
                              Make work-life balance a priority
                          </div>
                          <div className='Message-Subheading-Card'>
                              To engage the workforce and remain competitive, it's no longer sufficient to focus solely on benefits
                          </div>
                      </Paper>
                      </div>
                  </div>

              </div>
  );
};

export default Home;