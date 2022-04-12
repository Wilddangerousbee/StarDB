import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import PersonPage from '../person-page/person-page';

import SwapiService from '../../services/swapi-services';

import { SwapiServiceProvaider } from '../swapi-service-provaider';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from '../pages/login-page';

import SecretPage from '../pages/secret-page';

import ItemList from '../item-list';

import { Navigate } from 'react-router-dom';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({isLoggedIn: true})
  } 


  render(){
    const { swapiService } = this.props;
    const { isLoggedIn } = this.state;

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
              <Route path="/starships/" element={
                <ItemList selectionMethod = {this.swapiService.getAllStarships} urlPath = {"starships"}/>} />

              <Route path="/people/:id" element={<PersonPage
                  selectionMethod = {this.swapiService.getAllPeople}
                  selectionMethodUncle = {this.swapiService.getPerson}
                  urlPath={"people"}/>} />
              <Route path="/planets/:id" element={<PersonPage  
                  selectionMethodUncle = {this.swapiService.getPlanet}/>} />
              <Route path="/starships/:id" element={<PersonPage  
                  selectionMethodUncle = {this.swapiService.getStarship} />} />
              
              <Route path='/secret/' element={<SecretPage isLoggedIn={isLoggedIn}/>}/>
              <Route path='/login/' element={<LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn}/>}/>

              <Route path="*" element={<h1>Page not found</h1>}/>

            </Routes>
          </SwapiServiceProvaider>
        </Router>
      </div>
    );
  }
};