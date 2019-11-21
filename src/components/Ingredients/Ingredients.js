import React from 'react';
import {INGREDIENTS as ingrS} from '../../img/img'
const Ingredients = (props) => {
    return (
        ingrS.map((ingr,index)=>(
                <div key={index} >
                    <div className='ingredient'>
                        <button className='ingredient-btn'
                                onClick={() => props.addIngredient(ingr)}
                        >
                            <img
                                src={ingr.image}
                                alt={ingr.name}
                            />
                            {ingr.name}
                        </button>
                        <p>x{props.ingredientsApp[index].count}</p>
                        {props.ingredientsApp[index].count >0 ?
                            <button onClick={() => props.remove(ingr)}><i className="fas fa-trash-alt"/></button>
                            :null
                        }

                    </div>

                </div>
            ))

    );
};

export default Ingredients;