import React from 'react';
import './css/Navbar.css';

function Navbar(props: {title: String}) {
  return (
    <div className="Navbar">
      <div className="title">
          {props.title}
      </div>
    </div>
  );
}

export default Navbar;
