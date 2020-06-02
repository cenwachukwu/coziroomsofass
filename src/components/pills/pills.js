import React from 'react';
import './pills.scss';
import { Link } from '@reach/router';

const Pills = (props) => {
  // console.log(props.props);
  return (
    <div className="Pills">
      <Link to={props.link}>
        <img src={props.props} />
      </Link>

      <div className="pillLink">
        <Link to={props.link}>{props.categoryName}</Link>
      </div>
    </div>
  );
};

export default Pills;
