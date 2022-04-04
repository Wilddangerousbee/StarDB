import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {
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
    if (prevProps.selectionMethodUncle !== this.props.selectionMethodUncle){
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
      <div className="item-details card">
        <img className="item-image"
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