import React from 'react';

import './header.css';

const Header = ({onChangePage}) => {

  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li onClick={()=>onChangePage("people")}>
          <a href="#">People</a>
        </li>
        <li onClick={()=>onChangePage("planet")}>
          <a href="#">Planets</a>
        </li>
        <li onClick={()=>onChangePage("starShip")}>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;