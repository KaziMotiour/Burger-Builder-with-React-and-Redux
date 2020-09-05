import React ,{Component} from 'react'
import Order from '../../../components/Order/Order'

import WithErrorHandeling from '../../../hoc/WithErrorHandeling/WithErrorHandeling'
import axios from '../../../axios-order'


class Orders extends Component{
    
    state={
        orders:null,
        loading:true,
    }

    componentDidMount(){
        axios('orders.json')
        .then(response  =>{
            const fatchedData = []
            for(let key in response.data){
                fatchedData.push({
                    ...response.data[key],
                    id:key
                })
            }
            this.setState({orders:fatchedData, loading:false})
        }).catch(error=>{
            alert('netWork problem')
            this.setState({loading: true})
            this.props.history.goBack()
        })
    }
    
    
    
    render(){
        let order=(<h1>No Order panding</h1>)
        if(this.state.orders){
        order = this.state.orders.map(order=>(
           <Order key={order.id} ingredients={order.ingredients} 
           customer={order.customer.name} 
           totalPrice={order.totalPrice}/>
        ))
        }
        

        return(
            <div>
                {order}
            </div>
        )
    }
}

export default Orders;