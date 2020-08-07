import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import BuildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl'
import { types } from '@babel/core'

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0,
        }
    }
    
    addIngredients = (types) =>{
        console.log(types)

        const oldCount = this.state.ingredients[types]
        const updatedCount = oldCount+1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[types] = updatedCount

        this.setState({
            ingredients: updatedIngredients
                   
        })
    }

    removeIngredients = (types) =>{
        console.log(types)

        const oldCount = this.state.ingredients[types]
        if(oldCount>0){
        const updatedCount = oldCount-1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[types] = updatedCount

        this.setState({
            ingredients: updatedIngredients
                   
        })
    }else{
        return null
    }
    
            
    }


    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredients={this.addIngredients} removeIngredients={this.removeIngredients}/>
            </div>
        )
    }
}

export default BurgerBuilder