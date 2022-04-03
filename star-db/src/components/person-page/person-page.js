import React, { Component } from "react";

import PersonDetails from '../person-details';
import ItemList from "../item-list";

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
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList selectionMethod={selectionMethod} onSelected={this.onSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails selectionMethodUncle={selectionMethodUncle} personId={personId}/>
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}