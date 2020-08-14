import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import BuildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'

import { types } from '@babel/core'

const ingredientsPrice={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7,       
}

class BurgerBuilder extends Component{

    
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0,
        },
        
        totalPrice:4,
        purchasable:true,
        showSummery:false
        
    }
    
    addIngredients = (types) =>{
        console.log(types)
        
        const oldCount = this.state.ingredients[types]
        const updatedCount = oldCount+1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[types] = updatedCount
        const ingredient_price = ingredientsPrice[types]
        const newPrice = this.state.totalPrice + ingredient_price
        this.setState({
            ingredients: updatedIngredients,
            totalPrice:newPrice
            
        })
        this.updatePurchasableState(updatedIngredients)
        
    }

    removeIngredients = (types) =>{
        let ingredient_price=0
        const oldCount = this.state.ingredients[types]
        if(oldCount>0){
        const updatedCount = oldCount-1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[types] = updatedCount
        if(this.state.totalPrice>=4){ 
            ingredient_price = ingredientsPrice[types]
        }
        const newPrice = this.state.totalPrice - ingredient_price
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        
        })
        this.updatePurchasableState(updatedIngredients)
    }else{
        return null
    }
}

    updatePurchasableState = (ingredients) =>{
      
        const sum = Object.keys(ingredients)
            .map(igkey =>{
                return ingredients[igkey]
            }).reduce((sum, el)=>(
                sum+el
            ),0)
            
        this.setState({
            purchasable:sum <= 0
        })
        console.log(this.state.purchasable)
    }

    showSummeryHandellar = () =>{
        this.setState({
            showSummery: !this.state.showSummery
        })
    }

    purchasedContinued = () =>{
        alert("You're food is in processed")
    }
    // showSummeryHandellar = () =>{
    //     this.setState({
    //         showSummery: true
    //     })
    // }


    render(){


        const disabledInfo={
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        console.log(this.state.showSummery)
        return(
            <div>
                
                {this.state.showSummery? <Modal showSummery={this.state.showSummery} showSummeryHandellar={this.showSummeryHandellar}> 
                    <OrderSummery
                    totalPrice={this.state.totalPrice} 
                    purchasedContinuedHendelar={this.purchasedContinued}  
                    showSummery={this.showSummeryHandellar} 
                    ingredients={this.state.ingredients}/>
                </Modal>:null}
                
                <Burger ingredients={this.state.ingredients}/>
                
                <BuildControls
                showSummery={this.showSummeryHandellar}
                disabledOrderButton={this.state.purchasable}
                disabled={disabledInfo}  
                addIngredients={this.addIngredients} 
                removeIngredients={this.removeIngredients}
                totalPrice={this.state.totalPrice}
                />
            
            </div>
        )
    }
}

export default BurgerBuilder