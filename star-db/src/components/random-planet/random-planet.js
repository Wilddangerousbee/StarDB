import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';

import Loader from '../loader';
import './random-planet.css';
export default class RandomPlanet extends Component {
    serviceApi = new SwapiService();
    
    componentDidMount() {
        this.setPlanet();
        this.setInterval = setInterval(this.setPlanet, 2500);
    }

    componentWillUnmount() {
        clearInterval(setInterval); 
    }

    state = {
        currentPlanet: {
        },
        errorLoad: false
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onPlanetLoaded = (currentPlanet) => {
        this.setState({currentPlanet})
    };

    setPlanet = () => {
        const numberPlanet = this.getRandomInt(1, 25);

        this.serviceApi
            .getPlanet(numberPlanet)
            .then((planet) => {this.onPlanetLoaded(planet)})
            .catch((e)=>{this.setState({
                errorPlanet: true
            })})
        }

    render() {
        const {currentPlanet} = this.state;
        return (
        <div className="random-planet jumbotron rounded">
            {this.state.errorPlanet ? <ErrorIndicator /> : currentPlanet.name === undefined ? <Loader /> : <PlanetView currentPlanet={currentPlanet}/>}
        </div>
        );
    }
}

const PlanetView = ({currentPlanet}) => {
    const {urlPicture, rotationPeriod,
        diameter, name, pupulstion} = currentPlanet;
    return (
        <React.Fragment>
            <img className="planet-image"
                src={urlPicture} />
            <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <span className="term">Population</span>
                <span>{pupulstion}</span>
                </li>
                <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
                </li>
            </ul>
            </div>
        </React.Fragment>
    )
}

const ErrorIndicator = () => {
    return (
        <div>
            <h1>Ошбика ошибка. лучшие умы уже бьются как это исправить</h1>
        </div>
    )
}