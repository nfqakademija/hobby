import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link as RouterLink} from "react-router-dom";
import './ProjectInfo.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import {onVote} from "../../thunks/voteThunk";


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
  const {amount} = props.auth;
  const {projects, onVoteClick} = props;
  const projectInfo = projects.filter(project => {
    if(project.id.toString() === props.match.params.id) {
      return project;
    }
    return null;
  }).map((project, i) => {
    project.budget = 0;
    if (project.votes.length > 1) {
      project.budget = project.votes.reduce((total, vote)=> {
        return total + vote.amount;
      }, 0)
    } else if(project.votes.length === 1) {
      project.budget = project.votes[0].amount;
    }
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
                  <Button
                      variant="outlined"
                      onClick={() => onVoteClick(project.id, 5)}
                      disabled={amount < 5}
                  >5€</Button>
                  <Button
                      variant="outlined"
                      onClick={() => onVoteClick(project.id, 15)}
                      disabled={amount < 15}
                  >15€</Button>
                  <Button
                      variant="outlined"
                      onClick={() => onVoteClick(project.id, 30)}
                      disabled={amount < 30}
                  >30€</Button>
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
    projects: state.projects.projects,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  onVoteClick: (projectId, amount) => dispatch(onVote(projectId, amount))

});

export default connect(mapStateToProps,mapDispatchToProps)(ProjectInfo);