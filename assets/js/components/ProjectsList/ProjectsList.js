import React, {Component} from 'react';
import {Link as RouterLink } from 'react-router-dom';
import './ProjectsList.scss';
import {setProjectList} from '../../thunks/getProjects';
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import {onVote} from '../../thunks/voteThunk';

class ProjectsList extends Component {

  componentDidMount() {
    this.props.onGetProjectsList();

  }

  render() {
    const {projects,onVoteClick} =this.props;
    const {amount} = this.props.auth;
    console.log(projects)
    let projectsList;
    if(projects.length !== 0) {
      projectsList = projects && projects.map((project, i) => {
        return (
          <div className='Project-item' key={i}>
            <span className='Project-item__span'><span className="bold">Hobby Author:</span> {project.username}</span>
            <span className='Project-item__span'><span className="bold">Hobby Title:</span> {project.title}</span>
            <span className='Project-item__span'><span className="bold">Hobby Description:</span> {project.description}</span>
            <span className='Project-item__span'><span className="bold">Hobby Collected:</span> {project.budget}</span>
            <span className='Project-item__span'><span className="bold">Hobby Goal:</span> {project.amount}</span>
            <span className='Project-item__span'><span className="bold">Hobby Contact:</span> {project.email}</span>
            <button onClick={() => onVoteClick(project.id, 5)} disabled={amount < 5}>Vote 5€</button>
            <button onClick={() => onVoteClick(project.id, 15)} disabled={amount < 15}>Vote 15€</button>
            <button onClick={() => onVoteClick(project.id, 30)} disabled={amount < 30}>Vote 30€</button>
          </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);