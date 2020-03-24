import React from 'react';
import logo from './logo.svg';
import './App.css';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage';
import HomePage from './components/pages/HomePage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router history = {history}>
    <NavBar/>
    <div className="App">
    <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/portfolio' exact component={PortfolioPage}/>
        </Switch>
    </div>
    </Router>
  );
}



export default App;
