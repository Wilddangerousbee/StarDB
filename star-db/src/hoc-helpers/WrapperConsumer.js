import React from "react";

import { SwapiServiceConsumer } from "../components/swapi-service-provaider";

const WrapperConsumet = (View) => {
    return (props) => (
        <SwapiServiceConsumer> 
        { ({selectionMethod, selectionMethodUncle}) => {
                console.log(selectionMethod);
                console.log(selectionMethodUncle);
                console.log(View);
                return (<View {...props} selectionMethod = {selectionMethod} 
                        selectionMethodUncle = {selectionMethodUncle}/>
                )
            }
        }
        </SwapiServiceConsumer>
    )
}

export default WrapperConsumet;