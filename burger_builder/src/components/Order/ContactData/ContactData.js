import React, {Component} from 'react'
import Button from '../../UI/Buttons/Button'
import CSS from './ContactData.css'
import axios from '../../../axios-order'
import Spinner from '../../UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'
class ContactData extends Component{

    state={
        name:'',
        email:'',
        street:'',
        zipCode:'',
        city:'',
        loading:false,
    }


    orderHandeler = (event) =>{
        event.preventDefault();
        // console.log(parseFloat(this.props.totalPrice))
         this.setState({loading:true})
        const order={
            ingredients:this.props.ingredients,
            totalPrice:(parseFloat(this.props.totalPrice)).toFixed(2),
            customer:{
                name:this.state.name,
                email:this.state.email,
                address:{
                    street:this.state.street,
                    zipCode:this.state.zipCode,
                    city:this.state.city,
                    
                },
            },
            deliveryMethod:'fastest'
        }

        axios.post('orders.json',order)
        .then(response=> {
            this.setState({ loading:false})
            this.props.history.push('/order')
        })
        .catch(error=>this.setState({loading:false}))

    }

    inputHandelar = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        console.log(this.state.name)

        let form=(
            <form  >
                <input className={CSS.input} type="text"  name="name" value={this.state.name} onChange={this.inputHandelar} placeholder="your name" />
                <input className={CSS.input} type="email" name="email" value={this.state.email} onChange={this.inputHandelar} placeholder="your Mail" />
                <input className={CSS.input} type="text"  name="street" value={this.state.street} onChange={this.inputHandelar}placeholder="Street" />
                <input className={CSS.input} type="text"  name="zipCode" value={this.state.zipCode} onChange={this.inputHandelar}placeholder="Zip code" />
                <input className={CSS.input} type="text"  name="city" value={this.state.city} onChange={this.inputHandelar}placeholder=" country" /><br/>
                <Button btnType="Success" clicked={this.orderHandeler}>Order</Button>
            </form>
        );

        if(this.state.loading){
            form=<Spinner />
        }


        return(
            <div className={CSS.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;