import React, { Component } from "react";

import PersonDetails from '../person-details';
import ItemList from "../item-list";

export default class PersonPage extends Component {
    state = {
        personId: 2,
        error: false
    }

    onSelected = (id) => {
        console.log(id);
        this.setState({
            personId: id
        })
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }
    

    render(){
        const {personId} = this.state;
        const {selectionMethod, selectionMethodUncle} = this.props;

        if (this.state.error) {
            return <h1>Error</h1>
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList selectionMethod={selectionMethod} onSelected={this.onSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails selectionMethodUncle={selectionMethodUncle} personId={personId}/>
                </div>
            </div>
        )
    }
}