import React, {Component} from "react";

import SwapiService from "../services/swapi-services";

import Loader from "../components/loader";

const Wrapper = (View) => {
    return class extends Component {
      state = {
        item: [],
        loade: true,
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
        this.setState({loade: true})

        this.props.selectionMethod()
          .then(item => this.setState({item: item, loade: false}));
      }
  
      render(){
        const {item, loade} = this.state;
  
        if (loade) {
          return <Loader/>
        }
  
        return <View item={item} {...this.props}/>;
      }
    }
};

export default Wrapper;