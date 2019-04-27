import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NavBar.scss';
import 'hamburgers/dist/hamburgers.css';


class NavBar extends Component {
  state ={
    isActive: false
  }

  toggleActive = () => this.setState({isActive: !this.state.isActive})

  render() {
    const {isActive} = this.state;
    return (
      <div className='NavBar'>
        <Link className='Logo-link' to='/'><Logo/></Link>
        <nav className='Navigation'>
          <ul>
            <NavLink exact to='/' className='NavBar-link' activeClassName='active-link'>Home</NavLink>
            <NavLink to='/projects' className='NavBar-link' activeClassName='active-link'>Projects</NavLink>
            <NavLink to='/project-registration' className='NavBar-link New-Project' activeClassName='active-link'>New Project</NavLink>
          </ul>
        </nav>

        <div className='SignIn-links'>
          <Link className='SignIn-link' to='/login'>Sign In</Link>
          <Link className='SignIn-link' to='/register'>Sign Up</Link>
        </div>
        <button
          onClick={this.toggleActive}
          className={isActive ?
            'hamburger hamburger--squeeze is-active' : 'hamburger hamburger--squeeze'}
          type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
        </button>
        {isActive ?
          <div className='Hover'>
            <nav className='Hover--Navigation'>
              <ul>
                <NavLink
                  exact
                  to='/'
                  className='NavBar-link'
                  activeClassName='active-link'
                  onClick={this.toggleActive}
                >Home</NavLink>
                <NavLink
                  to='/projects'
                  className='NavBar-link'
                  activeClassName='active-link'
                  onClick={this.toggleActive}
                >Projects</NavLink>
                <NavLink
                  to='/project-registration'
                  className='NavBar-link New-Project'
                  activeClassName='active-link'
                  onClick={this.toggleActive}
                >New Project</NavLink>
              </ul>
            </nav>
            <div className='Hover--SignIn-links'>
              <Link
                onClick={this.toggleActive}
                className='SignIn-link'
                to='/login'>Sign In</Link>
              <Link
                onClick={this.toggleActive}
                className='SignIn-link'
                to='/register'>Sign Up</Link>
            </div>
          </div> : null
        }
      </div>
    );
  }
}

export default NavBar;