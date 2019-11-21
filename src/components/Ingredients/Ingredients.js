import React from 'react';
import {Ingredients as ingrS} from '../../img/img'
const Ingredients = (props) => {
    console.log(props.totalPriceApp);
    return (
        ingrS.map((ingr,index)=>(
                <div>
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
                        {props.ingredientsApp[index].count > 0 ?
                            <button onClick={() =>props.remove(ingr)}><i className="fas fa-trash-alt"/></button>
                            :null
                        }

                    </div>

                </div>
            ))

    );
};

export default Ingredients;