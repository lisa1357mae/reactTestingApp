import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'

export default function App() {
  return (

    <div>
      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>

      <div className='app'>
        <h1>Lisa Mae</h1>
        <p>front-end focused full-stack developer</p>
       </div>
          <main>
            {/* Home */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:id" component={About} />
              <Route path="/:id" component={Contact} />
            </Switch>

          </main>

        </div>
  )
}
