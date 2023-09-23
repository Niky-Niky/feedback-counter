import './App.css';
import { Component } from 'react'
// import { useContext } from 'react';
import { BigLabel } from '../src/components/Label/Label';

export class App extends Component{
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render(){
    return(
      <div>
        {/* <button>Click here</button> */}
        <BigLabel></BigLabel>
      </div>
    )
  }
}


