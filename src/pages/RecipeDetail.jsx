import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './RecipeDetail.css';

class RecipeDetail extends Component {
  state = {
    recipe: {},
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    //fetch the cards
    const callApi = async () => {
      const response = await fetch('http://starlord.hackerearth.com/recipe');
      let data = await response.json();
      const recipe = data.find((recipe) => recipe.id == id);
      console.log(recipe);
      this.setState({ recipe });
    };

    callApi();
  }
  render() {
    return (
      <div className='recipeDetail'>
        <br />
        <div>
          <Link to='/'>
            <i class='fa fa-arrow-left' aria-hidden='true'></i>Go Back
          </Link>
        </div>
        <br />
        <div className='ui grid'>
          <div className='row'>
            <div className='eleven wide column'>
              <img
                src={this.state.recipe.image}
                height='200px'
                width='300px'
                alt='img'
              />
              <div className='ingredients'>
                <div className='header'>Ingredients : </div>
                <div className='ingredients-body'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  illo dolor eum assumenda neque, eveniet optio sit aperiam
                  numquam corporis deserunt nesciunt. Esse aspernatur, suscipit
                  voluptas quo ab nisi magni.
                </div>
              </div>
              <div className='howtoprepare'>
                <div className='header'>How to Prepare :</div>
                <div className='howtoprepare-body'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  illo dolor eum assumenda neque, eveniet optio sit aperiam
                  numquam corporis deserunt nesciunt. Esse aspernatur, suscipit
                  voluptas quo ab nisi magni.
                </div>
              </div>
            </div>
            <div className='five wide column right'>
              <span>RECIPE</span>
              <h1>{this.state.recipe.name}</h1>
              <span>DESCRIPTION</span>
              <div>{this.state.recipe.description}</div>
              <br />
              <div className='threeCircles'>
                <div className='circle'>
                  <div>8</div>
                  <span>Ingredients</span>
                </div>
                <div className='circle'>
                  <div>220</div>
                  <span>Bucks</span>
                </div>
                <div className='circle'>
                  <div>25</div>
                  <span>Minutes</span>
                </div>
              </div>
              <br />
              <div>
                FAVOURITE THIS RECIPE
                <i
                  class='fa fa-heart'
                  aria-hidden='true'
                  style={{
                    fontSize: '20px',
                    color: '#CE1D1D',
                    marginLeft: '10px',
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeDetail);
