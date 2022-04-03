import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './person-details.css';

export default class PersonDetails extends Component {
  state = {
    person: {

    }
  }

  componentDidMount(){    
    this.setPerson();
  }

  componentDidUpdate(prevProps){
    if (prevProps.personId !== this.props.personId) {
      this.setPerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({person})
  };

  setPerson = () => {
    this.props
        .selectionMethodUncle(this.props.personId)
        .then((person) => {this.onPersonLoaded(person)})
  }

  render() {
    const {gender, birthYear, eyeColor, name, urlPicture} = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={urlPicture} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}