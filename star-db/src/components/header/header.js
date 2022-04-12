import React from 'react';

import './header.css';

import { Link } from 'react-router-dom'

const Header = ({onChangePage}) => {

  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/1">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships" >Starships</Link>
        </li>
        <li>
          <Link to="/secret" >Secret</Link>
        </li>
        <li>
          <Link to="/login" >Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;