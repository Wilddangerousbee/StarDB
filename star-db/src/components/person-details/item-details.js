import React, { Component } from 'react';

import './item-details.css';

const StringItem = ({content, contentName}) => {
  if (!content) return content;
  return (
            <li className="list-group-item">
              <span className="term">{contentName}</span>
              <span>{content}</span>
            </li>
  );
};
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
    const {gender, birthYear, eyeColor, name, urlPicture, 
      diameter, pupulstion, rotationPeriod, model, length, crew} = this.state.person;

    return (
      <div className="item-details card">
        <img alt='img' className="item-image"
          src={urlPicture} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <StringItem content={model} contentName={"Model"}/>
            <StringItem content={length} contentName={"Length"}/>
            <StringItem content={crew} contentName={"Crew"}/>
            <StringItem content={pupulstion} contentName={"Population"}/>
            <StringItem content={rotationPeriod} contentName={"Rotation Period"}/>
            <StringItem content={diameter} contentName={"Diameter"}/>
            <StringItem content={gender} contentName={"Gender"}/>
            <StringItem content={birthYear} contentName={"Birth Year"}/>
            <StringItem content={eyeColor} contentName={"Eye Color"}/>
          </ul>
        </div>
      </div>
    )
  }
}