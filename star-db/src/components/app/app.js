import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import PersonPage from '../person-page/person-page';

import SwapiService from '../../services/swapi-services';

import { SwapiServiceProvaider } from '../swapi-service-provaider';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
          <SwapiServiceProvaider value = {this.formServices()} > 
            <Header onChangePage={this.onChangePage}/>
            <RandomPlanet timeUpdate={2500}/>
            <Routes>
              <Route path="/starships" element={
                <PersonPage 
                  selectionMethod = {this.swapiService.getAllStarships} 
                  selectionMethodUncle = {this.swapiService.getStarship} />} />
              <Route path="/people" element={<PersonPage 
                  selectionMethod = {this.swapiService.getAllPeople} 
                  selectionMethodUncle = {this.swapiService.getPerson}/>} />
              <Route path="/planet" element={<PersonPage 
                  selectionMethod = {this.swapiService.getAllPlanets} 
                  selectionMethodUncle = {this.swapiService.getPlanet}/>} />
            </Routes>
          </SwapiServiceProvaider>
        </Router>
      </div>
    );
  }
};