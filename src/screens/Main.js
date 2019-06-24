import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './sreens/Home.js';
import About from './screens/About.js';
import Contact from './screens/Contact';



const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);
export default Main;
