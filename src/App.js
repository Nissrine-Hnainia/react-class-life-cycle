import React, { Component } from 'react'
import "./App.css"
import Counter from './Components/Counter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      <div className="App">
        <h1>react state and Class life cycle</h1>
        <button className="toggle-btn" onClick={this.toggle}>press</button>
        {this.state.show && (
          <Counter />
        )}
      </div>
    )
  }
}


