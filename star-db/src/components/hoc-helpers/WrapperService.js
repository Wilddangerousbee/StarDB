import React, {Component} from "react";

import SwapiService from "./../../services/swapi-services"

import Loader from "../loader";

const Wrapper = (View) => {
    return class extends Component {
      state = {
        item: [],
      }
    
      swapiServise = new SwapiService();
    
      componentDidMount(){
        this.setPeopel();
      }
    
      componentDidUpdate(prevProps){
        if (prevProps.selectionMethod !== this.props.selectionMethod) {
          this.setPeopel();
        }
      }
    
      setPeopel = () => {
        this.props.selectionMethod()
          .then(item => this.setState({item: item}));
      }
  
      render(){
        const {item} = this.state;
  
        if (!item) {
          return <Loader/>
        }
  
        return <View item={item} {...this.props}/>;
      }
    }
};

export default Wrapper;