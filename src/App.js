import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      subhanallah: 0,
      alhumdullilah: 0,
      allahuakbar: 0
    }
  }

  subhanllahChange = (e) => {
  e.preventDefault()
  this.setState({
    subhanallah: this.state.subhanallah + 1
  })

  }
  alhumdullilahChange = (e) => {
  e.preventDefault()
  this.setState({
    alhumdullilah: this.state.alhumdullilah + 1
  })

  }
  allahuakbarChange = (e) => {
  e.preventDefault()
  this.setState({
    allahuakbar: this.state.allahuakbar + 1
  })
  }

  render(){
  const { subhanallah } = this.state
  const { alhumdullilah } = this.state
  const { allahuakbar } = this.state

    return(
      <div className="container">
      <div>
      <img src="assets/subhanallah.jpg" alt="subhanallah" onClick={this.subhanllahChange} />
        <button className="cool"  type="text" id="count" >{this.state.subhanallah}</button>
      </div>
      <div>
      <img src="assets/alhumdullilah.jpg" alt="alhumdullilah" onClick={this.alhumdullilahChange}  />
              <button className="cool" type="text" id="count">{this.state.alhumdullilah}</button>
      </div>
      <div>
      <img src="assets/allahuakbar.jpg" alt="allahuakbar" onClick={this.allahuakbarChange}  />
              <button className="cool" type="text" id="count">{this.state.allahuakbar}</button>
      </div>
      </div>
    )
  }
}

export default App;
