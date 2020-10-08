import React, {Component} from 'react'
import Burger from '../../Burger/Burger'
import CSS from './CheckOutSummery.css'
import Button from '../../UI/Buttons/Button'
import {withRouter, Route} from 'react-router-dom'
import Spinner from '../../UI/Spinner/Spinner'
import ContactData from '../ContactData/ContactData'

class CheckOutSummery extends Component{


     state= ({
        ingredients:null,
        price:0,
    })
    
    componentDidMount(){
       
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let totalPrice=0
        for(let param of query.entries()){
            if(param[0] === 'price'){
                totalPrice=param[1]
            }else{
             ingredients[param[0]] = parseInt(param[1])
            }
        }
        this.setState({ingredients:ingredients, price:totalPrice})
       
    }
    
        
render(){
    console.log(this.state.ingredients)
    let burger=<Spinner />
    if(this.state.ingredients){
        burger = <Burger  ingredients={this.state.ingredients}/>
    }
    return(
        <div className={CSS.CheckOutSummery}>
            
            <h1 style={{textAlign:'center'}}>We hope it tastes will!</h1>
            
            <div style={{ height:'300px', margin:'auto'}}>
                {burger}
            </div>
            
            <div style={{marginTop:'auto'}}>
            <Button btnType="Danger"  clicked={this.props.checkoutCancelledHandler}>CANCLE</Button>
            <Button btnType="Success" clicked={this.props.checkoutcontinuedHandler}>CONFIRM</Button>
            </div>
       
        <div>
            <Route path={this.props.match.path + '/contact-data'}  
            render={(props)=> (<ContactData ingredients={this.props.ingredients} totalPrice={this.state.price} {...props}/>)} />
        </div>
            
        </div>
    )
}
}

export default withRouter(CheckOutSummery)