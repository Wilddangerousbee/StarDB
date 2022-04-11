import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import PersonPage from '../person-page/person-page';

import SwapiService from '../../services/swapi-services';

import { SwapiServiceProvaider } from '../swapi-service-provaider';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemList from '../item-list';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render(){
    const { swapiService } = this.props;

    return (
      <div>
        <Router>
          <SwapiServiceProvaider value = {swapiService} > 
            <Header />
            <RandomPlanet timeUpdate={2500}/>
            <Routes>
              <Route path='/' element={<h1>Welcom StarDB</h1>} />
              
              <Route path="/planets/" element={
                <ItemList selectionMethod = {this.swapiService.getAllPlanets} urlPath = {"planets"}/>} />
              <Route path="/people/" element={
                <ItemList selectionMethod = {this.swapiService.getAllPeople} urlPath = {"people"}/>} />
              <Route path="/starships/" element={
                <ItemList selectionMethod = {this.swapiService.getAllStarships} urlPath = {"starships"}/>} />

              <Route path="/people/:id" element={<PersonPage
                  selectionMethodUncle = {this.swapiService.getPerson}/>} />
              <Route path="/planets/:id" element={<PersonPage  
                  selectionMethodUncle = {this.swapiService.getPlanet}/>} />
              <Route path="/starships/:id" element={<PersonPage  
                  selectionMethodUncle = {this.swapiService.getStarship}/>} />
              
            </Routes>
          </SwapiServiceProvaider>
        </Router>
      </div>
    );
  }
};