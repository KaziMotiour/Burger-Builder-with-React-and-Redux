import React from 'react'
import CSS from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

const burger = props =>{

    let transformIngredients = Object.keys(props.ingredients).map(igkey =>(
        [...Array(props.ingredients[igkey])].map((_, i) =>(
            <BurgerIngredient key={igkey+i} type={igkey} />
        ))
 )).reduce((arr, stateEl) =>(
     
    arr.concat(stateEl)
 ),[])

 if(transformIngredients.length ===0){
     transformIngredients=<p>Please start adding ingredients"</p>
 }
// console.log(transformIngredients.length)
    const burger=( <div className={CSS.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformIngredients}
        <BurgerIngredient type="bread-bottom"/>

    </div>)

    return(
        <div>
       {burger}
       </div>
    )
}

export default burger