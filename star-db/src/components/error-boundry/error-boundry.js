import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    render(){
        const {error} = this.state;

        if (error) {
            return <h1>Error</h1>;
        }

        return this.props.children;
    }
}