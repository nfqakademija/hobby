import React, {Component} from 'react';
import Loader from '../Loader/Loader';
import {Link} from "react-router-dom";
import './Register.scss'
import * as actions from "../../actions/registerActions";
import {onRegisterFormSubmit} from '../../thunks/registerThunk';
import {connect} from "react-redux";

class Register extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.register, this.props.history);
  }
  render() {
    const {username, email, password, password2, error, loading} = this.props.register;
    const {onInputChange} = this.props
    return (
      <div className='Register'>
        <h2>Please Sign Up</h2>
        {error ? <p style={{
          color: 'red',
          textAlign: 'center'
        }}>{error}</p> : null}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name='username'
            placeholder='Please enter your name'
            value={username}
            onChange={onInputChange}
          />
          <input
            type="email"
            name='email'
            placeholder='Please enter your email'
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            name='password'
            placeholder='Please enter your password'
            value={password}
            onChange={onInputChange}
          />
          <input
            type="password"
            name='password2'
            placeholder='Please repeat your password'
            value={password2}
            onChange={onInputChange}
          />
          <button type="submit">
            {loading ? <Loader color={'#fff'} h={15} /> : 'Sign Up'}
          </button>
        </form>
        <p style={{fontSize: '12px'}}>If you don't have an account, please{' '}
          <Link className='Link' to='/login'>Sign In</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.register
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onFormSubmit: (user, history) => dispatch(onRegisterFormSubmit(user, history))
});
export default connect(mapStateToProps,mapDispatchToProps)(Register);