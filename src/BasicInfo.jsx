import './App.css'

import React, { Component } from 'react';



class BasicInfo  extends Component{
    // accessing this.props to retrieve/display person data 
    // this.props used to access person object passed from app component
  render(){
    // accessing props
    // props passed by parent (app) component avaliable in the props object of child component
    const {person} = this.props;
    return (
      <div className='person-card'>
       <h1>{person.name}</h1>
       <p> Phone Number : {person.PhoneNumber}</p>
       <p> Date of Birth : {person.DOB}</p>
       <p> Gender: {person.Gender}</p>
       <p> Occupation : {person.Occupation}</p>
      </div>  
    )}
  }
  
  export default BasicInfo