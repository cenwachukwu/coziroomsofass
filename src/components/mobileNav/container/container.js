import React from 'react';
import './container.scss';
import { Link } from '@reach/router';
import Hamburger from '../hamburger/hamburger';

const Container = (props) => {
  return (
    <div className="MobileNav">
      <Hamburger />

      <div className="MobileNav__container">
        <div className="logo">
          <div>
            <Link to="/">Room Sofas</Link>
          </div>
        </div>

        <div className="navbarUserLinks">
          <div className="navbarUserCart">
            <Link to="/signin">
              <i className="far fa-user"></i>
            </Link>
          </div>

          <div className="navbarUserCart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
