import React, { Component } from "react";


const WrapperItem = ({ItemNmae}) => {
    return class extends Component {
      state = {
        person: {
    
        }
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
        this.setState({person})
      };
    
      setPerson = () => {
        this.props
            .selectionMethodUncle(this.props.personId)
            .then((person) => {this.onPersonLoaded(person)})
      }
  
      render(){
        const item = this.state.person
  
        return <ItemNmae item={item} {...this.props}/>
      }
    }
  }

  export default WrapperItem;