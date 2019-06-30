import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Navbar = ({ title, icon }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon}></i> {title}
    </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: 'Github finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
export default Navbar;
