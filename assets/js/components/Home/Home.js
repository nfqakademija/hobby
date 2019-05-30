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
import ArrowIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "@material-ui/core/es/Link/Link";


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
                      <div className="Container--inline">
                      <Paper className={"Card"}>
                          <img className="Img-card" src={TeamImage} />
                          <div className='Message-Title'>
                              A New and Better way to engange
                          </div>
                          <div className='Message-Subheading'>
                              Companies use HobbyCraft to organize their
                              employees hobby budget
                          </div>
                          <RouterLink  className="link" >Read More <ArrowIcon className="arrow--LeftMargin"/> </RouterLink>
                      </Paper>

                      <Paper className={"Card"} >
                          <img className="Img-card--bottom-5px" src={ColleagueImage} />
                          <div className='Message-Title'>
                              A New and Better way to engange
                          </div>
                          <div className='Message-Subheading'>
                              Companies use HobbyCraft to organize their
                              employees hobby budget
                          </div>
                             <RouterLink  className="link" >Read More <ArrowIcon className="arrow--LeftMargin"/> </RouterLink>
                      </Paper>
                      </div>
                  </div>


                  <div className="Container">
                      <div className={"Container--Bottom"}>
                          <div  className="Navigation">
                              <div className="Bottom-Title">
                                  HobbyCraft
                              </div>
                          </div>
                          <div className="Navigation" >
                              <div className="Bottom-Title">
                                  Navigation
                              </div>

                              <div className="Sub-Title">
                                  <RouterLink to={'/'}>Home</RouterLink>
                                  <RouterLink to={'/register'}>Sign Up</RouterLink>
                                  <RouterLink to={'/about'}>About</RouterLink>
                                  <RouterLink to={'/login'}>Sign In</RouterLink>
                              </div>
                          </div>
                          <div  className="Navigation">
                              <div className="Bottom-Title">
                                  Legal
                              </div>
                          </div>
                          <div  className="Navigation">
                              <div className="Bottom-Title">
                                  Contact Us
                              </div>
                          </div>
                      </div>
                  </div>



              </div>
  );
};

export default Home;