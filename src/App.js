import React, {Component,Fragment} from 'react';
import './App.css';
import Ingredient from "./components/Ingredients/Ingredients";
import RenderBurger from "./components/Burger/RenderBurger";

class App extends Component {
    state = {
                ingredients: [
            {name: 'Meat', count: 0,},
            {name: 'Cheese', count: 0,},
            {name: 'Bacon', count: 0,},
            {name: 'Salad', count: 0,},
        ],
        totalPrice: 20,
    };

    addIngr = obj => {
        let ingredients = [...this.state.ingredients];
        const ingredientsIndex = ingredients.findIndex(t => t.name === obj.name);
        ingredients[ingredientsIndex].count++;
        let totalPrice = this.state.totalPrice;
        totalPrice += obj.price;
        this.setState({ingredients,totalPrice})
    };

    removeIngr = name => {
        const ingredients = [...this.state.ingredients];
        const ingredientsIndex = ingredients.findIndex(t => t.name === name.name);
        ingredients[ingredientsIndex].count--;
        let totalPrice = this.state.totalPrice;
        totalPrice -= name.price;
        this.setState({ingredients,totalPrice})
    };

  render() {
    return (
        <Fragment>
            <div style={{marginTop: '10px','textAlign': 'center'}}>
        <div className='mainBlock'>
          <h4>Ingredients</h4>
                <Ingredient

                  ingredientsApp={this.state.ingredients}
                  addIngredient={this.addIngr}
                  remove={this.removeIngr}
                />

        </div>
                <RenderBurger ingredients={this.state.ingredients} total={this.state.totalPrice}/>
            </div>
        </Fragment>
    );
  }
}

export default App;
