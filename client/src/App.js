import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newRetroItem: '',
      retroItemsArray: []
    }
  }

  componentDidMount() {
    axios
      .get(`/config`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    let stateNameToUpdate = e.target.name;
    let stateValueToUpdate = e.target.value;
    let newState = this.state;
    newState[stateNameToUpdate] = stateValueToUpdate;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newState = this.state;
    newState.retroItemsArray.push(this.state.newRetroItem);
    newState.newRetroItem = '';
    this.setState(newState);
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <div className="row">
            Form input goes here. Button goes here.
            <input type="text" onChange={this.handleChange} name="newRetroItem" value={this.state.newRetroItem}/>
            <input type="submit" className="btn btn-primary" onClick={this.handleSubmit}/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            Single Item goes here.
          </div>
          <div className="row">
            Single Item goes here.
          </div>
          <div className="row">
            Single Item goes here.
          </div>
          <div className="row">
            Single Item goes here.
          </div>
        </div>
        <div className="container">
          {this.state.retroItemsArray.map((singleRetroItem) => (
            <p>{singleRetroItem}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
