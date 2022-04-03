import React, { Component } from "react";

import PersonDetails from '../person-details';
import ItemList from "../item-list";
import Row from "../row";

import ErrorBoundary from "../error-boundry/error-boundry";

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
            <ErrorBoundary>
                <Row 
                    left={<ItemList selectionMethod={selectionMethod} onSelected={this.onSelected}/>}
                    right={<PersonDetails selectionMethodUncle={selectionMethodUncle} personId={personId}/>}/>
            </ErrorBoundary>
        )
    }
}