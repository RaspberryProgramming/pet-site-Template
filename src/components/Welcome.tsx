import React from 'react';
import './css/Welcome.css';

function Welcome(props: {title: string, profile: string, slogan: string}) {
  return (
    <div className="Welcome">
      <h1 className="title">
          {props.title}
      </h1>
      <img className="profile" src={props.profile} />
      <h1 className="slogan">
          {props.slogan}
      </h1>
    </div>
  );
}

export default Welcome;
