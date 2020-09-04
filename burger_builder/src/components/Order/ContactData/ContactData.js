
import React, {Component} from 'react'
import Button from '../../UI/Buttons/Button'
import CSS from './ContactData.css'

class ContactData extends Component{

    state={
        name:'',
        email:'k',
        address:{
            street:'',
            zipCode:'',
            country:''
        },
    }

    render(){

        return(
            <div className={CSS.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form  >
                    <input className={CSS.input} type="text" name="name" placeholder="your name" />
                    <input className={CSS.input} type="email" name="email" placeholder="your Mail" />
                    <input className={CSS.input} type="text" name="street" placeholder="Street" />
                    <input className={CSS.input} type="text" name="zipCode" placeholder="Zip code" />
                    <input className={CSS.input} type="text" name="country" placeholder=" country" /><br/>
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;