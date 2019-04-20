import React, { Component } from 'react';
import './App.css';
import peace from './images/Peace.jpg';
import Store from './store'
class App extends Component {
  state= {
    name:'Andrew'
  }
  myMethod=()=>{
    this.setState({
      name:'Ms. Thang Thang'
    })

  }
  render() {
    return (
      <div className="Store">
      <img src={peace} alt=""/>
      
        <h1>BOII Stoooop!</h1>
        <p>get that shit, {this.state.name}</p>
      <button onClick={this.myMethod}> Clcik dis</button>
      <Store />



      </div>
    );
  }
}

export default App;
