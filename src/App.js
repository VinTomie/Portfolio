import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './components/header';

import Footer from './components/footer';

import Middle from './components/middle';

import Miscellaneous from './components/miscellaneous';

import OtherLinks from './components/otherlinks';

import Works from './components/works';



class App extends Component {
  render() {
    return (
      <div className="App">

        <div class ="nav-wrapper">

          <ul id="nav" class="center-align">

            <li>
              <a href="#home"> HOME </a>
            </li>
            <li>

              <a href="#location"> LOCATION </a>
            </li>

            <li>
              <a href = "#miscellaneous"> MISCELLANEOUS </a>
            </li>

            <li>
              <a href = "#works"> WORKS AND PUBLICATIONS </a>
            </li>

            <li>
              <a href = "#backtorutgers"> BACK TO RUTGERS </a>
            </li>


          </ul>

        </div>


        <div id = "home">

          <Header/>

        </div>


        <div id = "location">

          <Middle/>

        </div>


        <div id = "miscellaneous">

          <Miscellaneous/>

        </div>


        <div id = "works">

          <Works/>

        </div>

        <div id = "backtorutgers">

          <OtherLinks/>

        </div>


        <div id = "bottom">
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
