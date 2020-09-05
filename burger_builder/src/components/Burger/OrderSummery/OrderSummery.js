import React from 'react'
import {withRouter} from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
const orderSummery = props =>{

    const ingredientsSummery = Object.keys(props.ingredients)
                    .map((igkey)=>(
                        <li key={igkey} style={{transform: "capitalize"}}>
                            <span>{igkey}</span> : {props.ingredients[igkey]}
                        </li>
                    ))
 return(

    <div>
        <h3 style={{padding:'left'}}>You're Order <span onClick={props.showSummery} style={{float:'right', cursor:'pointer'}}>X</span></h3> 
        <p>A delicious burger with following ingredients: </p>
        <ul>
            {ingredientsSummery}
        </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)} $ </strong></p>
        <p>Continue with checkout?</p>
        <Button btnType="Success" clicked={props.ConfrmOrder}>Confirm order</Button> 
        <Button btnType="Danger" clicked={props.showSummery}>Cancel order</Button>
    </div>
 )
}

export default withRouter(orderSummery)