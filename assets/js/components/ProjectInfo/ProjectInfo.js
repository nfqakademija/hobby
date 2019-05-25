import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link as RouterLink} from "react-router-dom";
import './ProjectInfo.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
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



const ProjectInfo = (props) => {
  const projectInfo = props.projects.filter(project => {
    if(project.id.toString() === props.match.params.id) {
      return project;
    }
    return null;
  }).map((project, i) => {
    return (
          <div className='Project' key={i}>
            <div className='Title'>{project.title}</div>
              <div className='progress-bar'>
                  <div>{project.budget} €</div>
                  <div className='LinearProgressMoney'>
                      <LinearProgress variant={'buffer'} value={(project.budget/project.amount)*100}/>
                  </div>
                  <div>{project.amount} €</div>
              </div>
              <div className='VoteButtons'>
                  <Button variant="outlined" >5€</Button>
                  <Button variant="outlined" >15€</Button>
                  <Button variant="outlined" >30€</Button>
              </div>

              <div className='wrapper'>
                    <div className='Author'>
                      <div>Author Email: </div>
                      <div className='Text--Bold'> {project.email}</div>
                    </div>
                  <div className='Description' >
                      <div>{project.description}</div>
                  </div>
              </div>

              <Button
                  className='Button'
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to='/projects'>
                  <Typography
                      color="secondary"
                  >Back to projects</Typography>
              </Button>
          </div>
    )
  })
  return (
      <MuiThemeProvider theme={theme}>
          <Paper className='container'>
            <div className='ProjectInfo'>
              {projectInfo}
            </div>
          </Paper>
      </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

export default connect(mapStateToProps)(ProjectInfo);