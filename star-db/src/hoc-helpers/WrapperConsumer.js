import React, { Component } from "react";


const WrapperConsumet = (View) => {
    return class extends Component {

        render(){
            const {selectionMethod, selectionMethodUncle} = this.props;
            
            return (<View {...this.props} selectionMethod = {selectionMethod} 
                                
                selectionMethodUncle = {selectionMethodUncle}/>
            )
        }
    }
}

export default WrapperConsumet;