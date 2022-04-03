import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import PersonPage from '../person-page/person-page';

import SwapiService from '../../services/swapi-services';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    pageName: "starShip" 
  }

  render(){
    const {pageName} = this.state;

    return (
      <div>
        <Header />
        <RandomPlanet />
        <PersonPage 
          selectionMethod={pageName === "starShip" ? this.swapiService.getAllStarships : pageName === "planet" ? this.swapiService.getAllPlanets : this.swapiService.getAllPeople}
          selectionMethodUncle={pageName === "starShip" ? this.swapiService.getStarship : pageName === "planet" ? this.swapiService.getPlanet : this.swapiService.getPerson}
        />
      </div>
    );
  }
};