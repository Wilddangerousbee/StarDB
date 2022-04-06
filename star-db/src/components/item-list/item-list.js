import React from 'react';

import Wrapper from '../hoc-helpers/WrapperService';

import './item-list.css';


const ItemList = (props) => {

  const items = ((item) => {
    return item.map((item) => {
      return(
          <li 
              onClick={() => props.onSelected(item.id)}
              key={item.id} className="list-group-item">
              {item.name}
              {" "}
              {item.model}
              {" "}
              {item.birthYear}
              {" "}
              {item.diameter}
          </li>
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