import React, {Component} from 'react'
import Burger from '../../Burger/Burger'
import CSS from './CheckOutSummery.css'
import Button from '../../UI/Buttons/Button'
import {withRouter} from 'react-router-dom'

class CheckOutSummery extends Component{


     state= ({
        ingredients:{
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0

        }
    })
    
    componentDidMount(){
       
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        for(let param of query.entries()){
            ingredients[param[0]] = param[1]
        }
        console.log(ingredients)
        this.setState({ingredients:ingredients})
       
    }
        
render(){
    return(
        <div className={CSS.CheckOutSummery}>
            <h1 style={{textAlign:'center'}}>We hope it tastes will!</h1>
            <div style={{ height:'300px', margin:'auto'}}>
                <Burger  ingredients={this.props.ingredients} />
            </div>
            <div style={{marginTop:'auto'}}>
            <Button btnType="Danger"  clicked={this.props.checkoutCancelledHandler}>CANCLE</Button>
            <Button btnType="Success" clicked={this.props.checkoutcontinuedHandler}>CONFIRM</Button>
            </div>
        </div>
    )
}
}

export default withRouter(CheckOutSummery)