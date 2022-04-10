import React, { Component } from 'react';
import Loader from '../components/loader';


const WrapperItemDetails = (ItemCompponent) => {
    return class extends Component {
      state = {
        person: {
    
        },
        loader: true,
        error: false
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
        this.setState({person: person, loader: false, error: false})
      };
    
      setPerson = () => {
        this.setState({loader: true})

        this.props
            .selectionMethodUncle(this.props.personId)
            .then((person) => {this.onPersonLoaded(person)})
            .catch(()=> this.setState({error: true}))
      }
  
      render() {
        const {person, loader, error} = this.state;
        
        if (error) {
          return <h1>Error</h1>
        }

        if (loader) {
          return <Loader/>
        }

        return <ItemCompponent item={person} {...this.props}/>;
      }
    }
  }

export default WrapperItemDetails;