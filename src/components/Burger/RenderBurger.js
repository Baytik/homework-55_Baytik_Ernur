import React from 'react';

const RenderBurger = props => {
    return (
        <div className="Burger">
            <h4>Burger</h4>
            <div className="BreadTop">
                <div className="Seeds1"/>
                <div className="Seeds2"/>
            </div>
            <div className="BreadBottom"/>
            <div className="price">{props.totalPrice}</div>
        </div>

    );
};

export default RenderBurger;