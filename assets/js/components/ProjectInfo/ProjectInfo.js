import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import './ProjectInfo.scss';
import moment from 'moment';

const ProjectInfo = (props) => {
  const projectInfo = props.projects.filter(project => {
    if(project.id.toString() === props.match.params.id) {
      return project;
    }
    return null;
  }).map((project, i) => {
    const endDate = moment(project.end_date).format('YYYY-MM-DD');
    return (
      <div className='Project' key={i}>
        <span className='Project-span'><span className="bold">Hobby Author:</span> {project.username}</span>
        <span className='Project-span'><span className="bold">Hobby Description:</span> {project.description}</span>
        <span className='Project-span'><span className="bold">Hobby Amount:</span> {project.amount}&euro;</span>
        <span className='Project-span'><span className="bold">Hobby Contact:</span> {project.email}</span>
        <span className='Project-span'><span className="bold">Hobby EndDate:</span> {endDate}</span>
      </div>
    )
  })
  return (
    <div className='ProjectInfo'>
      {projectInfo}
      <Link className='Link Back' to='/projects'>Back to projects</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

export default connect(mapStateToProps)(ProjectInfo);