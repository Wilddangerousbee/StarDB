import React from "react";

import PersonDetails from '../person-details';

import { useParams } from "react-router-dom";

import WrapperConsumet from "../../hoc-helpers/WrapperConsumer";

const PersonPage = ({selectionMethod, selectionMethodUncle}) => {

    return (
        <PersonDetails selectionMethodUncle={selectionMethodUncle} personId={useParams().id}/>
    )
}

export default WrapperConsumet(PersonPage);