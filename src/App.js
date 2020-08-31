import React from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import SearchPage from './components/searchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          
          <Route exact path="/search">
            <SearchPage />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>          

        </ Switch>

        <Footer />

      </ Router>
      
    </div>
  );
}

export default App;
