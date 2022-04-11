import React from "react";

import PersonDetails from '../person-details';

import Row from "../row/row";
import ItemList from "../item-list";

import { useParams } from "react-router-dom";

import WrapperConsumet from "../../hoc-helpers/WrapperConsumer";

const PersonPage = ({selectionMethod, selectionMethodUncle, urlPath}) => {
    const idItem = useParams().id;

    if (selectionMethod){
        return (
            <Row left={<ItemList selectionMethod={selectionMethod}
                        urlPath={urlPath}/>}
                 right={<PersonDetails selectionMethodUncle={selectionMethodUncle} personId={idItem}/>}/>
        );
    }
    return (
        <PersonDetails selectionMethodUncle={selectionMethodUncle} personId={idItem}/>
    );
}

export default WrapperConsumet(PersonPage);