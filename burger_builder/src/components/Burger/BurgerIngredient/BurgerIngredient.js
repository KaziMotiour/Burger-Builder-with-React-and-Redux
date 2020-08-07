import React from 'react'
import CSS from './BurgerIngredient.css'
import PropTypes from 'prop-types'

const BugerIngredient = props =>{
    
    let ingredient = null;

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
        case('cheese'):
            ingredient = <div className={CSS.Cheese}></div>
            break;
        case('salad'):
            ingredient = <div className={CSS.Salad}></div>
            break;
        case('bacon'):
            ingredient = <div className={CSS.Bacon}></div>
            break;
        default:
            ingredient = null
    
            
    }
    return ingredient
    
    BugerIngredient.propTypes = {
        type: PropTypes.string.isRequired
    }
}

export default BugerIngredient