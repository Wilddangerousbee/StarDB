import React, { Component } from 'react';

import './item-details.css';

import WrapperItemDetails from '../../hoc-helpers/WrapperItemDetails';

const StringItem = ({content, contentName}) => {
  if (!content) return content;
  return (
            <li className="list-group-item">
              <span className="term">{contentName}</span>
              <span>{content}</span>
            </li>
  );
};

class ItemDetails extends Component {
  
  render() {
    const {gender, birthYear, eyeColor, name, urlPicture, 
      diameter, pupulstion, rotationPeriod, model, length, crew} = this.props.item;

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

export default WrapperItemDetails(ItemDetails);