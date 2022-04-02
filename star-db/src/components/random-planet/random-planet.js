import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';

import './random-planet.css';

export default class RandomPlanet extends Component {
    constructor(){
        super()
        this.state = {
            currentPlanet: {
                urlPicture: "https://starwars-visualguide.com/assets/img/planets/5.jpg",
                pupulstion: 123124,
                rotationPeriod: 43,
                diameter: 100,
                planetName: "Planet Name"
            }
        }
    }

    baseUrl = "https://starwars-visualguide.com/assets/img/planets/";

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setPlanet = async () => {
        const serviceApi = new SwapiService();
        const numberPlanet = this.getRandomInt(1, 25);

        serviceApi.getPlanet(numberPlanet)
            .then((planet) => {
                this.setState({
                    currentPlanet: {
                        urlPicture: `${this.baseUrl}${numberPlanet}.jpg`,
                        pupulstion: planet.population,
                        rotationPeriod: planet.rotation_period,
                        diameter: planet.diameter,
                        planetName: planet.name
                    },
                })
            })
        }

    render() {

        return (
        <div className="random-planet jumbotron rounded">
            <img className="planet-image"
            onClick={this.setPlanet}
                src={this.state.currentPlanet.urlPicture} />
            <div>
            <h4>{this.state.currentPlanet.planetName}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <span className="term">Population</span>
                <span>{this.state.currentPlanet.pupulstion}</span>
                </li>
                <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{this.state.currentPlanet.rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{this.state.currentPlanet.diameter}</span>
                </li>
            </ul>
            </div>
        </div>

        );
    }
}