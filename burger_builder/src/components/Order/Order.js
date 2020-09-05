import React  from 'react'
import CSS from './Order.css'
import axios from '../../axios-order'

const Order = props =>{
        const ingredients= []

        for (let ingredientname in props.ingredients){

            ingredients.push({
                name: ingredientname,
                amount: props.ingredients[ingredientname]
            })
        }

        const ingredientOutput = ingredients.map(ing =>{
            return(<span>{ing.name} ({ing.amount})&nbsp;</span>)
        })

    return(
    <div className={CSS.Order}>
        <p>Name: {props.customer}</p>
    <p>Ingredients: {ingredientOutput}</p>
        <p> Price: <strong>USD {props.totalPrice}</strong></p> 
    </div>
    )
}
export default Order;