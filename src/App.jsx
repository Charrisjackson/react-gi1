import { useState } from 'react'
import './App.css'
import React, { Component } from 'react';
import BasicInfo from './BasicInfo';



// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object


// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

//HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state.(Optional: add styling to space out each person’s info)



class App extends Component  {
 
  constructor(props){
    super(props);
    this.state = {
      people:[
        {
            name: 'Carmani Harris-Jackson',
            PhoneNumber: '980-255-2609',
            DOB:' April 22nd, 2002',
            Gender: 'Female',
            Occupation: 'Coding apprentice'
          },
          {
            name: 'John Doe',
            PhoneNumber: '980-135-6739',
            DOB:' April 12th, 2000',
            Gender: 'Male',
            Occupation: 'Plummer'
        },
    
            {
                name: 'Jane Doe',
                PhoneNumber: '980-123-4567',
                DOB:' June 9th, 2001',
                Gender: 'Female',
                Occupation: 'Receptionist'
            },
            {
                name: 'Bob Miller',
                PhoneNumber: '980-456-7890',
                DOB:' December 3rd, 1999',
                Gender: 'Male',
                Occupation: 'Software Engineer'
            }
    ]
    }
  }
render(){
  return (
    <div className='peoplediv'>
      {/* displaying person props with information */}
      {/* <BasicInfo person = {this.state.person}/> */}

      {this.state.people.map((person)=>(
        <BasicInfo key = {person.name} person={person}/>)
    
  
  )}
    </div>
)};
}

// .map to iterate over the people array
// each person passed as a prop to the BasicInfo component
// state now has an array of people instead of a person object
// key prop set to the persons name, could also be index but index would have to be passed as a value nect to person in that instance 





export default App

