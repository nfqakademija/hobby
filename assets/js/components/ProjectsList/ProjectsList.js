import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import './ProjectsList.scss';
import {setProjectList} from '../../thunks/getProjects';
import {connect} from "react-redux";
import Link from "@material-ui/core/Link";
import {onVote} from '../../thunks/voteThunk';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import LinearProgress from '@material-ui/core/LinearProgress';

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


class ProjectsList extends Component {
    constructor() {
        super();

        this.state = {
            opened: false,
        }
    }


  componentDidMount() {
    this.props.onGetProjectsList();

  }

  render() {
    const {projects,onVoteClick} =this.props;
    const {amount} = this.props.auth;
    // const { opened } = this.state;
    let projectsList;
    if(projects.length !== 0) {
      projectsList = projects && projects.map((project, i) => {
        return (

            <MuiThemeProvider theme={theme} className={"container"} >
                <Grid className={'main'}>
                      <Paper className={'Card'} component={ RouterLink }  to={`/project/${project.id}`}>
                         <div className={'Card-title'}>{project.title}</div>
                          <div className={'Card-description'}>{project.description}</div>
                          <div className={"Card-progress"}>
                              <div>{project.amount}$</div>
                              <div className={"Card-progress-bar"}>
                                <LinearProgress/>
                              </div>
                              <div>{project.budget}$</div>
                          </div>
                            <div className={'VoteButtons'} >
                                <Button variant="outlined" style={{borderRadius: 50, margin: 5 }} color="primary" onClick={() => onVoteClick(project.id, 5)}  disabled={amount < 5}>5€</Button>
                                <Button variant="outlined" style={{borderRadius: 50, margin: 5 }} color="primary" onClick={() => onVoteClick(project.id, 15)} disabled={amount < 15}>15€</Button>
                                <Button variant="outlined" style={{borderRadius: 50, margin: 5 }} color="primary" onClick={() => onVoteClick(project.id, 30)} disabled={amount < 30}>30€</Button>
                            </div>
                      </Paper>
                </Grid>
            </MuiThemeProvider>
        )
      })
    } else {
      projectsList = <Typography
          variant="h4"
          gutterBottom
          align="center"
      >Projects will be here soon...</Typography>
    }
    return (
        <MuiThemeProvider theme={theme}>
          <div className='ProjectsList'>
            {projectsList}
            <Typography
                variant="h6"
                gutterBottom
                align="center"
            >If you have a project, please{' '}
              <Link component={ RouterLink } color={'secondary'} to='/project-registration'>Register</Link>
              {' '}your project(hobby).
            </Typography>
          </div>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProjectsList: () => dispatch(setProjectList()),
  onVoteClick: (projectId, amount) => dispatch(onVote(projectId, amount))

});
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);