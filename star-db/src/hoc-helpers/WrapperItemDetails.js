import React, { Component } from 'react';
import Loader from '../components/loader';


const WrapperItemDetails = (ItemCompponent) => {
    return class extends Component {
      state = {
        person: {
    
        },
        loader: true
      }
    
      componentDidMount(){    
        this.setPerson();
      }
    
      componentDidUpdate(prevProps){
        if (prevProps.personId !== this.props.personId) {
          this.setPerson();
        }
        if (prevProps.selectionMethodUncle !== this.props.selectionMethodUncle){
          this.setPerson();
        }
      }
    
      onPersonLoaded = (person) => {
        this.setState({person: person, loader: false})
      };
    
      setPerson = () => {
        this.props
            .selectionMethodUncle(this.props.personId)
            .then((person) => {this.onPersonLoaded(person)})
      }
  
      render() {
        const {person, loader} = this.state;
        
        if (loader) {
          return <Loader/>
        }

        return <ItemCompponent item={person} {...this.props}/>;
      }
    }
  }

export default WrapperItemDetails;