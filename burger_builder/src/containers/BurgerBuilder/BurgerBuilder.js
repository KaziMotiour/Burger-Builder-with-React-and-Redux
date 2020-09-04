import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import BuildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import { types } from '@babel/core'
import Axios from 'axios'
import withErrorHandeling from '../../hoc/WithErrorHandeling/WithErrorHandeling'

import CheckOutSummery from '../../components/Order/CheckOutSummery/CheckOutSummery'

const ingredientsPrice={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7,       
}

class BurgerBuilder extends Component{

    
    state = {
        ingredients:null,
        
        totalPrice:4,
        purchasable:true,
        showSummery:false,
        loading: false,
        error: null,
        
    }
    
    componentDidMount(){
        
        axios.get('https://burger-builder-1e42d.firebaseio.com/ingredients.json')
            .then(response =>{
                this.setState({ingredients:response.data})
            }).catch(error=>this.setState({error:error}))
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
            console.log(sum)
            
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
        // this.setState({loading:true})
        // const order={
        //     ingredients:this.state.ingredients,
        //     totalPrice:(this.state.totalPrice).toFixed(2),
        //     customer:{
        //         name:'Max',
        //         email:'kmatiour30@gmail.com',
        //         address:{
        //             street:'Santi-nir',
        //             zipCode:'41315',
        //             country:'bangaldesh,cumilla'
        //         },
        //     },
        //     deliveryMethod:'fastest'
        // }

        // axios.post('orders.json',order)
        // .then(response=> this.setState({ loading:false, showSummery:false}))
        // .catch(error=>this.setState({loading:false, showSummery:false}))

        
    }
    // showSummeryHandellar = () =>{ff
    //     this.setState({
    //         showSummery: true
    //     })
    // }

   

    confrmOrder = () =>{
        this.setState({ loading:false, showSummery:false})

        const  queryParams = []
        for(let i in this.state.ingredients){
          
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }

        const queryString = queryParams.join('&')
        
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+ queryString

        })

    }
    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }
    checkoutcontinuedHandler = () =>{
        this.props.history.push('/checkout/collected-data');
    }


    render(){


        const disabledInfo={
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummery = <OrderSummery
        ConfirmOrder={this.ConfirmOrder}
        totalPrice={this.state.totalPrice} 
        ConfrmOrder={this.confrmOrder}  
        showSummery={this.showSummeryHandellar} 
        ingredients={this.state.ingredients}/>

        let burger = this.state.error ? 
        <p style={{textAlign:'center',}}> <strong>Ingredient can't be loadded!</strong></p>:<Spinner />
        if(this.state.ingredients){
            burger=(
                <div>
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


        let checkoutSummery = this.state.error ? 
        <p style={{textAlign:'center',}}> <strong>Ingredient can't be loadded!</strong></p>:<Spinner />
       
        if(this.state.ingredients){
            checkoutSummery=(
                <div>
                <CheckOutSummery 
                ingredients={this.state.ingredients}
                checkoutCancelledHandler={this.checkoutCancelledHandler}
                checkoutcontinuedHandler={this.checkoutcontinuedHandler}
                />
                </div>
            )
        }
        

        if(this.state.loading){
            orderSummery = <Spinner />
        }
    
        return(
            <div>
                
                {this.state.showSummery? <Modal showSummery={this.state.showSummery} showSummeryHandellar={this.showSummeryHandellar}> 
                    {orderSummery}
                </Modal>:null}
                

                <Switch>
                <Route path='/burger' render={() => burger}/>
                <Route path='/checkout' exact strict render={() => checkoutSummery} />
                <Route render={() => this.props.history.push('/burger')} />
                </Switch>
            </div>
        )
    }
}

export default withErrorHandeling(withRouter(BurgerBuilder), axios)