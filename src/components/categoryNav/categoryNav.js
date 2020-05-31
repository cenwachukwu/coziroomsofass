import React from 'react';
import './categoryNav.scss';
import { Link } from '@reach/router';

const CategoryNav = (props) => {
  return (
    <div className="categoryNav">
      <div className="categoryNavContainer">
        <ul className="navbarCategoryLinks">
          <li>
            <Link to="/Chair">Chair</Link>
          </li>
          <li>
            <Link to="/AccentChair">Accent Chair</Link>
          </li>
          <li>
            <Link to="/SofaandLoveseat">Sofa & Loveseat</Link>
          </li>
          <li>
            <Link to="/Recliner">Recliners</Link>
          </li>
          <li>
            <Link to="/Sectionals">Sectionals</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryNav;
