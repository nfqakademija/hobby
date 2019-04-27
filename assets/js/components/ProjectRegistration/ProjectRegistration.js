import React, {Component} from 'react';
import './ProjectRegistration.scss';
import Loader from '../Loader/Loader';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as actions from '../../actions/projectRegisterActions';
import {onProjectRegisterFormSubmit} from '../../thunks/projectRegisterThunk';


class ProjectRegistration extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.projectRegister, this.props.history)
  }

  render() {
    const {
      username,
      hobbyName,
      email,
      description,
      amount,
      endDate,
      loading,
      error
    } =this.props.projectRegister;
    const {onInputChange, onDateChange} = this.props
    return (
      <div className='ProjectForm'>
        <h2>Please Register Your Hobby</h2>
        {error ? <p style={{
          color: 'red',
          textAlign: 'center'
        }}>{error}</p> : null}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name='username'
            value={username}
            onChange={onInputChange}
            placeholder='Please enter your name'/>
          <input
            type="text"
            name='hobbyName'
            value={hobbyName}
            onChange={onInputChange}
            placeholder='Please enter your hobby name'/>
          <DatePicker
            onChange={onDateChange}
            selected={endDate}
            placeholderText="Select project end date"
            dateFormat="yyyy MM dd"
            minDate={new Date()}
          />
          <input
            type="email"
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder='Please enter your email'/>
          <textarea
            name="description"
            rows="5"
            value={description}
            onChange={onInputChange}
            placeholder='Please describe your hobby'/>
          <input
            type="number"
            name='amount'
            value={amount}
            onChange={onInputChange}
            placeholder='Please enter amount for your needs'/>
          <button className="form-submit" type="submit">
            {loading ? <Loader color={'#fff'} h={15} /> : 'Place your hobby'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectRegister: state.projectRegister
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onDateChange: (date) => dispatch(actions.onDateChange(date)),
  onFormSubmit: (projectInfo, history)=>dispatch(onProjectRegisterFormSubmit(projectInfo,history))
});
export default connect(mapStateToProps,mapDispatchToProps)(ProjectRegistration);