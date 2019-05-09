import React, {Component} from 'react';
import {Link as RouterLink } from 'react-router-dom';
import './ProjectsList.scss';
import {setProjectList} from '../../thunks/getProjects';
import {connect} from "react-redux";
import Link from "@material-ui/core/Link";
import {onVote} from '../../thunks/voteThunk';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from "@material-ui/core/Grid"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EA7925',
        },
        secondary: {
            main: '#656969',
        },
    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        alignItems: 'center',
        width: 500,
        marginTop: '5%',
        padding: 10,
    },
    margin: {
        margin: theme.spacing.unit,
    },
});



class ProjectsList extends Component {

    componentDidMount() {
    this.props.onGetProjectsList();

  }

    render() {
        const { classes } = this.props;
    const {projects,onVoteClick} =this.props;
    const {amount} = this.props.auth;
    let projectsList;
    if(projects.length !== 0) {
      projectsList = projects && projects.map((project, i) => {
        return (

            <MuiThemeProvider theme={theme} className={classes.root} >
                <Grid  >
                        <Grid
                            item xs={12}
                            container
                            direction="column"
                            alignItems="center"
                        >
                      <Paper
                             container
                             elevation={8}
                             className={classes.paper}
                             key={i}>
                        <Typography variant="h4"  align="center" >{project.title}</Typography>
                        <Typography variant="subheading" color='secondary' align="center" >{project.description}</Typography>
                        <Typography align="center">Hobby Collected: {project.budget}$</Typography>
                        <Typography align="center">Amount Needed: {project.amount}$</Typography>
                        <div item xs={12}>
                              <Button  variant="contained" onClick={() => onVoteClick(project.id, 5)} disabled={amount < 5}>Vote 5€</Button>
                              <Button variant="contained" onClick={() => onVoteClick(project.id, 15)} disabled={amount < 15}>Vote 15€</Button>
                              <Button  variant="contained" onClick={() => onVoteClick(project.id, 30)} disabled={amount < 30}>Vote 30€</Button>
                        </div>
                          <ExpansionPanel
                              align='center'
                              elevation={0}>
                              <ExpansionPanelSummary>
                                <Button variant="contained">Read More</Button>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails >
                                  <Typography
                                      >
                                      Hobby Author: {project.username}<br/>
                                      Hobby Contact: {project.email}
                                  </Typography>
                              </ExpansionPanelDetails>
                          </ExpansionPanel>
                      </Paper>
                        </Grid>
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
      <div className='ProjectsList'>
        {projectsList}
        <Typography
            variant="h6"
            gutterBottom
            align="center"
        >If you have a project, please{' '}
          <Link component={ RouterLink } className='Link' to='/project-registration'>Register</Link>
          {' '}your project(hobby).
        </Typography>
      </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ProjectsList));