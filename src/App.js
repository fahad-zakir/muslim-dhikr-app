import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      subhnallah: null,
      alhumdullilah: null,
      allahuakbar: null
    }
  }

  subhanllahChange = (e) => {
  e.preventDefault()
  }
  alhumdullilahChange = (e) => {
  e.preventDefault()
  }
  allahuakbarChange = (e) => {
  e.preventDefault()
  }
  render(){

    return(
      <div className="App">
      <img src="assets/praises.jpg" alt="praises"/>
      </div>
    )
  }
}

export default App;
