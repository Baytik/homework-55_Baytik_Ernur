import React from 'react';
const Ingredients = (props) => {
    return (
        <div>
                <div className='ingredient'>
                    <button className='ingredient-btn'><img src={props.img} alt={props.name}/>{props.name}
                    </button>
                    <p>x1</p>
                    <button ><i className="fas fa-trash-alt"/></button>
                </div>

        </div>
    );
};

export default Ingredients;