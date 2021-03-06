import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header.component'
import Footer from './components/Footer/Footer.component'
import Construction from './components/Construction/Construction.component'

import About from './pages/About/About.page'
import Contact from './pages/Contact/Contact.page'

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Construction} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App