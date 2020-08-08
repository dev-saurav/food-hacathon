import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';
import './HomePage.css';
import CardDisplay from '../components/CardDisplay/CardDisplay';

class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
        <Header subText='Category' heading='Pizza & Noodles' />
        <CardDisplay />
      </div>
    );
  }
}

export default HomePage;
