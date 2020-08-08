import React, { Component } from 'react'
import Card from '../Card/Card';
import './CardDisplay.css';
import { Link } from 'react-router-dom';
class CardDisplay extends Component {
    state = {
        recipes: []
    }
    componentDidMount() {
        //fetch the cards
        const callApi = async () => {
            const response = await fetch("http://starlord.hackerearth.com/recipe");
            let data = await response.json();
            this.setState({ recipes: data });
        }

        callApi();
    }
    render() {
        return (
            <div className="CardDisplay">
                {this.state.recipes.map(({ id, ...otherProps }, index) => <Link to={`/recipe/${id}`}><Card className="item" key={id} {...otherProps} index={index} /></Link>)}
                <Card />
            </div>
        )
    }
}

export default CardDisplay;