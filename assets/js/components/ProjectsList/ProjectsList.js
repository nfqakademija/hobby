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
    const {email} = this.props.auth
    let projectsList;
    if(projects.length !== 0) {
      projectsList = projects && projects.map((project, i) => {
        return (
          <div className='Project-item' key={i}>
            <span className='Project-item__span'><span className="bold">Hobby Author:</span> {project.username}</span>
            <span className='Project-item__span'><span className="bold">Hobby Description:</span> {project.description}</span>
            <button onClick={() => onVoteClick(email, project.id, 5)}>Vote 5€</button>
            <button onClick={() => onVoteClick(email, project.id, 15)}>Vote 15€</button>
            <button onClick={() => onVoteClick(email, project.id, 30)}>Vote 30€</button>
            <Link component={ RouterLink } className='Link Info' to={`/project/${project.id}`}>See more info</Link>
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
  onVoteClick: (userEmail, projectId, amount) => dispatch(onVote(userEmail, projectId, amount))

});
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);