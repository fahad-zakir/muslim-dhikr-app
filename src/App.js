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
  this.setState({
    subhanllah: subhanllah++
  })

  }
  alhumdullilahChange = (e) => {
  e.preventDefault()
  this.setState({
    alhumdullilah: alhumdullilah++
  })

  }
  allahuakbarChange = (e) => {
  e.preventDefault()
  this.setState({
    allahuakbar: allahkuakbar++
  })

  }
  render(){

    return(
      <div className="container">
      <img src="assets/praises.jpg" alt="praises"/>
      </div>
    )
  }
}

export default App;
