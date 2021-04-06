import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginView} from './frontface/pages/client/auth/login'
import {Home} from './frontface/pages/client/Home/Home'
import {HomeView} from './frontface/pages/client/Register/register'
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <LoginView></LoginView>
      </div>
    );
  }
}