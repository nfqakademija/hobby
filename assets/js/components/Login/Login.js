import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/loginActions';
import { onFormSubmit } from '../../thunks/loginThunk';
import Loader from '../Loader/Loader';
import './Login.scss';


class Login extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.props.login, this.props.history)
  }


  render() {
    const { email, password, error, loading } = this.props.login
    const { onInputChange } = this.props;
    return (
      <div className='Login'>
        <h2>Please Sign In</h2>
        {error ? <p style={{
          color: 'red',
          textAlign: 'center'
        }}>{error}</p> : null}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="email"
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder='Please enter your email'/>
          <input
            type="password"
            name='password'
            value={password}
            onChange={onInputChange}
            placeholder='Please enter your password'/>
          <button type="submit">
            {loading ? <Loader color={'#fff'} h={15} /> : 'Sign In'}
          </button>
        </form>
        <p style={{fontSize: '12px'}}>If you don't have an account, please{' '}
          <Link className='Link' to='/register'>Sign Up</Link>
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onFormSubmit: (user, history) =>dispatch(onFormSubmit(user,history)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);