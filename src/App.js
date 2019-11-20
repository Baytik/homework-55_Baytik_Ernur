import React, {Component} from 'react';
import Ingredient from "./components/Ingredients/Ingredients";
import {Ingredients as ing} from './img/img'
import BurgerBread from "./components/Burger/BurgerBread";
import './App.css'

class App extends Component {
    state = {
        ingredients: [
            {name: 'Meat', count: 0,},
            {name: 'Cheese', count: 0,},
            {name: 'Bacon', count: 0,},
            {name: 'Salad', count: 0,},
        ]
    };
  render() {
    console.log(ing);
    return (
        <div className='mainBlock'>
          <h4>Ingredients</h4>
          {ing.map(ing => {
            return (
                <Ingredient img = {ing.image} name = {ing.name} />
            )
          })}
          <BurgerBread/>
        </div>
    );
  }
}

export default App;
