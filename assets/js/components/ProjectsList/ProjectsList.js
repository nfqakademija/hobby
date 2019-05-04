import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProjectsList.scss';
import {setProjectList} from '../../thunks/getProjects';
import {connect} from "react-redux";

class ProjectsList extends Component {

  componentDidMount() {
    this.props.onGetProjectsList();

  }

  render() {
    const {projects} =this.props;
    let projectsList;
    if(projects.length !== 0) {
      projectsList = projects && projects.map((project, i) => {
        return (
          <div className='Project-item' key={i}>
            <span className='Project-item__span'><span className="bold">Hobby Author:</span> {project.username}</span>
            <span className='Project-item__span'><span className="bold">Hobby Description:</span> {project.description}</span>
            <Link className='Link Info' to={`/project/${project.id}`}>See more info</Link>
          </div>
        )
      })
    } else {
      projectsList = <p>Projects will be here soon...</p>
    }
    return (
      <div className='ProjectsList'>
        {projectsList}
        <p>If you have a project, please{' '}
          <Link className='Link' to='/project-registration'>Register</Link>
          {' '}your project(hobby).
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProjectsList: () => dispatch(setProjectList())
});
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);