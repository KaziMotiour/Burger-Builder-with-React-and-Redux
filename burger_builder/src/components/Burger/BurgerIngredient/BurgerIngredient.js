import React from 'react'
import CSS from './BurgerIngredient.css'

const BugerIngredient = props =>{
    
    let bugerIngredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={CSS.BreadBottom}></div>
            break;
        case('bread-top'):
            ingredient = (
                <div className={CSS.BreadTop}>
                    <div className={CSS.Seeds1}></div>
                    <div className={CSS.Seeds2}></div>
                </div>)
                break;
        case('meat'):
            ingredient = <div className={CSS.Meat}></div>
            break;
        case('Cheese'):
            ingredient = <div className={CSS.Cheese}></div>
            break;
        case('Salad'):
            ingredient = <div className={CSS.Salad}></div>
            break;
        case('Bacon'):
            ingredient = <div className={CSS.Bacon}></div>
            break;
        default:
            ingredient = null
    return ingredient
            
    }
    
    
    
    return(
        <div>

        </div>
    )
}