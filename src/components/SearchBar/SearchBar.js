import React, { Component } from 'react'
import './SearchBar.css';
import SearchIcon from '../../assets/Icons/Icon feather-search.png';
export default class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <img className="search-icon" src={SearchIcon} alt="search" />
                <input className="search" type="text" placeholder="Search your favourite recipe..." />
            </div>
        )
    }
}
