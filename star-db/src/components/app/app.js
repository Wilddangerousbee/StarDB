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

  render(){
    const { swapiService } = this.props;

    return (
      <div>
        <Router>
          <SwapiServiceProvaider value = {swapiService} > 
            <Header />
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