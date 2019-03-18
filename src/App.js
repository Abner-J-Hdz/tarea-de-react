import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuLateral from './components/menulateral';
import Encabezado from './components/encabezado';
import './dashboard.css';


class App extends Component {
  render() {
    return (
  <div>
    <Encabezado></Encabezado>
    <MenuLateral></MenuLateral>
    <script src="./scripts/bootstrap.bundle.min.js"></script>
    <script src="./scripts/dashboard.js"></script>
    <script src="./scripts/jquery-3.3.1.slim.min.js"></script>
  </div>
    );
  }
}

export default App;
