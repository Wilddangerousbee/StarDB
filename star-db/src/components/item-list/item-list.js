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
            {item.name ? `Name: ${item.name} ` : undefined}
            {item.model ? `Model: ${item.model} ` : undefined}
            {item.birthYear ? `Birth Year: ${item.birthYear} ` : undefined}
            {item.diameter ? `Diameter: ${item.diameter} ` : undefined}
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