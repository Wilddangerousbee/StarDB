import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import PersonPage from '../person-page/person-page';

import SwapiService from '../../services/swapi-services';

import { SwapiServiceProvaider } from '../swapi-service-provaider';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    pageName: "person" 
  }

  onChangePage = (pageName) => {
    this.setState({
      pageName
    })
  }

  formServices (){
    const {pageName} = this.state;
    const selectionMethod = pageName === "starShip" ? this.swapiService.getAllStarships : pageName === "planet" ? this.swapiService.getAllPlanets : this.swapiService.getAllPeople
    const selectionMethodUncle = pageName === "starShip" ? this.swapiService.getStarship : pageName === "planet" ? this.swapiService.getPlanet : this.swapiService.getPerson;

    return {
      selectionMethod: selectionMethod,
      selectionMethodUncle: selectionMethodUncle
    }
  }

  render(){
    return (
      <div>
        <SwapiServiceProvaider value = {this.formServices()} > 
          <Header onChangePage={this.onChangePage}/>
          <RandomPlanet timeUpdate={2500}/>
          <PersonPage/>
        </SwapiServiceProvaider>
      </div>
    );
  }
};