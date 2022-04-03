import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './item-list.css';

export default class ItemList extends Component {
  state = {
    item: [],
  }

  swapiServise = new SwapiService();

  componentDidMount(){
    this.setPeopel();
  }

  setPeopel = () => {
    this.props.selectionMethod()
      .then(item => this.setState({item: item}));
  }

  createList = (item) => {
    return item.map((item) => {
      return(
        <li 
            onClick={() => this.props.onSelected(item.id)}
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
  }

  render() {
    const {item} = this.state;

    return (
      <ul className="item-list list-group">
        {this.createList(item)}
      </ul>
    );
  }
}