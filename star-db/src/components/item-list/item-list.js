import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './item-list.css';

export default class ItemList extends Component {
  state = {
    peopel: [],
  }

  swapiServise = new SwapiService();

  componentDidMount(){
    this.setPeopel();
  }

  setPeopel = () => {
    this.swapiServise.getAllPeople()
      .then(peopel => this.setState({peopel: peopel}));
  }

  createList = (people) => {
    return people.map((peopel) => {
      return(
        <li 
            onClick={() => this.props.onSelected(peopel.id)}
            key={peopel.id} className="list-group-item">
            {peopel.name}
        </li>
      )  
    }
  );
  }

  render() {
    const {peopel} = this.state;

    return (
      <ul className="item-list list-group">
        {this.createList(peopel)}
      </ul>
    );
  }
}