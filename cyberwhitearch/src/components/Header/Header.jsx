import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const HeaderComponent = () => {
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M0.139238 3.81956C0.415444 5.54012 0.900071 8.50853 1.49156 11.9183C1.59229 12.499 2.02479 12.9668 2.59568 13.1133L23.6328 18.5097C23.8778 18.5725 24.1346 18.5724 24.3795 18.5094L45.3474 13.1122C45.9144 12.9662 46.345 12.503 46.4488 11.9267C47.0621 8.52026 47.5688 5.55349 47.8589 3.82998C48.0034 2.97165 47.3864 2.17489 46.5197 2.0954L24.1432 0.0433772C24.052 0.0350201 23.9603 0.0350201 23.8692 0.0433772L1.47992 2.09658C0.61789 2.17563 0.0020296 2.96486 0.139238 3.81956ZM6.24041 32.2824L23.4387 39.8379C23.821 40.0059 24.256 40.0069 24.639 39.8407L42.0591 32.2829C42.4668 32.106 42.7761 31.7587 42.8942 31.3303C43.6468 28.6009 44.5343 24.4154 45.3723 20.1137C45.5823 19.0358 44.5963 18.1101 43.5324 18.3825L24.4126 23.2776C24.1671 23.3405 23.9095 23.3401 23.6642 23.2765L4.80595 18.3877C3.74449 18.1125 2.7564 19.0322 2.9607 20.1096C3.77757 24.4174 4.65209 28.6089 5.41404 31.339C5.53221 31.7624 5.83797 32.1056 6.24041 32.2824Z" fill="#DFE3E7"/>
</svg>
      </Link>

      <nav className="nav">
        <NavLink className="nav-link" to="/source-files">Source Files</NavLink>
        <NavLink className="nav-link" to="/tools">
          Tools
          <span className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.117776 17.7296C-0.0341317 17.8815 -0.0341317 18.1278 0.117776 18.2797L0.805409 18.9674C0.957316 19.1193 1.20361 19.1193 1.35552 18.9674L9.88216 10.4407C10.0011 10.3218 10.0269 10.145 9.9596 10.0009C10.027 9.85683 10.0012 9.67996 9.88222 9.56098L1.35557 1.03434C1.20367 0.882429 0.957376 0.882429 0.805468 1.03434L0.117835 1.72197C-0.0340724 1.87388 -0.0340721 2.12017 0.117836 2.27208L7.84658 10.0008L0.117776 17.7296Z"
                fill="#707989"
              />
            </svg>
          </span>
        </NavLink>
        <NavLink className="nav-link" to="/community">Community</NavLink>
      </nav>

      <button className="button">GET STARTED</button>
    </header>
  );
};

export default HeaderComponent;
