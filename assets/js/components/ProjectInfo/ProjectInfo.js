import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link as RouterLink} from "react-router-dom";
import './ProjectInfo.scss';
// import LinearProgress from "../ProjectsList/ProjectsList";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
// import LinearProgress from "../ProjectsList/ProjectsList";

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
              <div>{project.budget}</div>
              <div className='LinearProgressMoney'>
                  <LinearProgress variant={'buffer'} value={(project.budget/project.amount)*100}/>
              </div>
              <div>{project.amount}</div>
          </div>
          <div className='VoteButtons'>
              <Button variant="outlined" >5€</Button>
              <Button variant="outlined" >15€</Button>
              <Button variant="outlined" >30€</Button>
          </div>

          <div className='container'>
            <div className='Description'>{project.description}</div>
            <div className='card'>
                <div className='Text--left'>
                    <p className="Text">Author:</p>
                    <p className='Text--Bold'>{project.username}</p>
                    <p className="Text">Author Email:</p>
                    <p className='Text--Bold'>{project.email}</p>
                </div>

            </div>
          </div>

      </div>
    )
  })
  return (
      <MuiThemeProvider theme={theme}>
        <div className='ProjectInfo'>
          {projectInfo}
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
      </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

export default connect(mapStateToProps)(ProjectInfo);