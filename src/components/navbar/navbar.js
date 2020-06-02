import React from 'react';
import './navbar.scss';
import { Link } from '@reach/router';

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div className="logo">
          <div>
            <Link to="/">Room</Link>
          </div>
          <div className="borderTop">
            <Link to="/">Sofas</Link>
          </div>
        </div>

        <div className="navbarUserLinks">
          {/* <div className="navbarUserCart">
            <Link to="/signin">
              <i className="far fa-user"></i>
            </Link>
          </div> */}

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

export default Navbar;
