import 'bootstrap/dist/css/bootstrap.min.css';
import {HomeView} from './frontface/pages/client/Register/main'
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <HomeView></HomeView>
      </div>
    );
  }
}



