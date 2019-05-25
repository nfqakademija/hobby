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
import Loader from '../Loader/Loader';
import TextField from '@material-ui/core/TextField';

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
      searchValue: ''
    }
  }


  componentDidMount() {
    this.props.onGetProjectsList();
  }

  onSearchBarChange = e => this.setState({searchValue: e.target.value})

  render() {
    const {projects, onVoteClick} = this.props;
    const {amount} = this.props.auth;
    let projectsList;
    if (projects.length !== 0) {
      projectsList = projects && projects.filter(project => {
        if (project.title.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
          return project;
        }
      })
          .map((project, i) => {
        return (
            <MuiThemeProvider theme={theme} key={i}>
              <Grid className={'main'}>
                <Paper className={'Card'} component={RouterLink} to={`/project/${project.id}`}>
                  <div className={'Card-title'}>{project.title}</div>
                  <div className={'Card-description'}>{project.description}</div>
                  <div className={"Card-progress"}>
                    <div>{project.budget}$</div>
                    <div className={"Card-progress-bar"}>
                      <LinearProgress variant={'buffer'} value={(project.budget / project.amount) * 100}/>
                    </div>
                    <div>{project.amount}$</div>
                  </div>
                  <div className={'VoteButtons'}>
                    <Button variant="outlined" style={{borderRadius: 50, margin: 5}} color="primary"
                            onClick={() => onVoteClick(project.id, 5)} disabled={amount < 5}>5€</Button>
                    <Button variant="outlined" style={{borderRadius: 50, margin: 5}} color="primary"
                            onClick={() => onVoteClick(project.id, 15)} disabled={amount < 15}>15€</Button>
                    <Button variant="outlined" style={{borderRadius: 50, margin: 5}} color="primary"
                            onClick={() => onVoteClick(project.id, 30)} disabled={amount < 30}>30€</Button>
                  </div>
                </Paper>
              </Grid>
            </MuiThemeProvider>
        )
      })
    } else {
      projectsList = <div className='Loader-container'>
        <Loader color={'#EA7925'} h={100}/>
      </div>
    }
    return (
        <MuiThemeProvider theme={theme}>
          <div className='ProjectsList'>
            <div className="SearchBar">
              <TextField
                  fullWidth
                  placeholder="Please enter keywords"
                  value={this.state.searchValue}
                  onChange={this.onSearchBarChange}
              />
            </div>
            {projectsList}
            <Typography
                variant="h6"
                gutterBottom
                align="center"
            >If you have a project, please{' '}
              <Link component={RouterLink} color={'secondary'} to='/project-registration'>Register</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);