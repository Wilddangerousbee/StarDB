import React, { Component } from "react";

import PersonDetails from '../person-details';
import ItemList from "../item-list";
import Row from "../row";

export default class PersonPage extends Component {
    state = {
        personId: 2,
    }

    onSelected = (id) => {
        console.log(id);
        this.setState({
            personId: id
        })
    }

    render(){
        const {personId} = this.state;
        const {selectionMethod, selectionMethodUncle} = this.props;

        return (
                <Row 
                    left={<ItemList selectionMethod={selectionMethod} onSelected={this.onSelected}/>}
                    right={<PersonDetails selectionMethodUncle={selectionMethodUncle} personId={personId}/>}/>
        )
    }
}