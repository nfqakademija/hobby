import React from 'react';
import './loader.scss';

const Loader = ({color,h=40}) => (
  <div
    style={{
      width:h+'px',
      height:h+'px',
      borderRight:`${h/6}px solid transparent`,
      borderLeft:`${h/6}px solid transparent`,
      borderTop:`${h/6}px solid ${color}`,
      borderBottom:`${h/6}px solid ${color}`,
    }}
    className={`Loader ${color}`}/>
);

export default Loader;