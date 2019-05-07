import React from 'react';
import './Logo.scss';
import logo from '/public/apple-touch-icon.png';

const Logo = () => {
  return (
    <div className='Logo'>
        <img src={logo} alt="Logo" />;
      <span className='Logo-title'>HobbyCraft</span>
    </div>
  );
};

export default Logo;