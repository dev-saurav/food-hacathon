import React from 'react';
import './App.css';
import i1 from './assets/Images/Illustration1.png';
import i2 from './assets/Images/Illustration2.png';
import HomePage from './pages/HomePage';
import RecipeDetail from './pages/RecipeDetail';
import SearchBar from './components/SearchBar/SearchBar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/recipe/:id">
            <RecipeDetail />
          </Route>
        </Router>
      </div>
      <img src={i2} className="top-illustration" alt="illustration" />
      <img src={i1} className="bottom-illustration" alt="illustration" />
    </div>
  );
}

export default App;
