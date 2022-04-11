import React from 'react';

import { Link } from 'react-router-dom';

import Wrapper from '../../hoc-helpers/WrapperService';

import './item-list.css';

const ItemList = (props) => {

  const items = ((item) => {
    return item.map((item) => {
      return(
          <Link to = {'/' + props.urlPath + '/' + item.id} 
              key={item.id} className="list-group-item">
              {item.name}
              {" "}
              {item.model}
              {" "}
              {item.birthYear}
              {" "}
              {item.diameter}
          </Link>
        )  
      }
    );
  })(props.item)


  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}



export default Wrapper(ItemList);