import React from 'react';
import nanoid from 'nanoid'

const RenderBurger = (props) => {
    const generateIngredietns = () => {
        let arrIngr = [];
        for (let i = 0; i < props.ingredients.length;i++) {
            for (let k = 0; k < props.ingredients[i].count; k++) {
                arrIngr.push(<div key={nanoid()} className={props.ingredients[i].name}></div>)
            }
        };
        return arrIngr;
    };

    return (
        <div className="Burger">
            <h4>Burger</h4>
            <div className="BreadTop">
                <div className="Seeds1"/>
                <div className="Seeds2"/>
            </div>
            {generateIngredietns()}
            <div className="BreadBottom"/>
            <p>Price: {props.total}</p>
        </div>
    );
};

export default RenderBurger;