import React from 'react';
import {Link} from "react-router-dom";

import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <p>This is place for your hobby projects.</p>
      <p>To see projects, please go to{' '}
        <Link className='Link' to='/projects'>Projects List</Link>
      </p>
      <p>If you have an account please{' '}
        <Link className='Link' to='/login'>Sing In</Link>
      </p>
      <p>If you don't have an account please{' '}
        <Link className='Link' to='/register'>Sing Up</Link>
      </p>
    </div>
  );
};

export default Home;