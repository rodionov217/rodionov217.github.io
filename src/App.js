import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
import { MainScreen } from './js/MainScreen';
import { Header } from './js/Header';
import { About } from './js/About';
import { Work } from './js/Work';
import { Contacts } from './js/Contacts';

library.add(fab, fas);

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
      <Header/>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/work'  component={Work}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/' exact component={MainScreen}/>
      </Switch>
      {window.location.pathname === '/' ? <footer id="main-footer">
        Copyright &copy; 2018
      </footer> : null}
    </BrowserRouter>
  );
}

export default App;
