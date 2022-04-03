import React, { Component, useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  state = {
    personId: 2,
  }

  onSelected = (id) => {
    this.setState({
      personId: id
    })
  }

  render(){
    const  {personId} = this.state;

    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelected={this.onSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={personId}/>
          </div>
        </div>
      </div>
    );
  }
};