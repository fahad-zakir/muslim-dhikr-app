import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      subhanallah: null,
      alhumdullilah: null,
      allahuakbar: null
    }
  }

  // subhanllahChange = (e) => {
  // e.preventDefault()
  // this.setState({
  //   subhanallah: subhanllah++
  // })

  // }
  // alhumdullilahChange = (e) => {
  // e.preventDefault()
  // this.setState({
  //   alhumdullilah: alhumdullilah++
  // })

  // }
  // allahuakbarChange = (e) => {
  // e.preventDefault()
  // this.setState({
  //   allahuakbar: allahkuakbar++
  // })
  // }

  render(){
  const subhanallah = this.state
  const alhumdullilah = this.state
  const allahuakbar = this.state

    return(
      <div className="container">
        <div>
      <img src="assets/subhanallah.jpg" alt="subhanallah" />
      </div>
      <div>
      <img src="assets/alhumdullilah.jpg" alt="alhumdullilah"  />
      </div>
      <div>
      <img src="assets/allahuakbar.jpg" alt="allahuakbar"  />
      </div>
      </div>
    )
  }
}

export default App;
