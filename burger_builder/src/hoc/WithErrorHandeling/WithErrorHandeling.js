import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandelar = (WrappedComponent, axios) =>{
    return class extends Component{

        state={
            error:null
        }

        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req =>{
                this.setState({error:null})
                return req
            })

            this.resInterceptors = axios.interceptors.response.use(req => req, error=>{
                this.setState({error:error})
            })
        }

        componentWillUnmount(){
            
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }

        errorConfrimHamdelar = () =>{
            this.setState({error:null})
        }


        render(){
        return(
            <div>
                {this.state.error ? <Modal showSummery={this.state.error}  showSummeryHandellar={this.errorConfrimHamdelar}>
                     {this.state.error.message}
                </Modal>: null}
                <WrappedComponent{...this.props} />       
            </div>
        )
    }
}
}

export default withErrorHandelar