import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {filterFunc} from './action/userAction'



class FormInput extends Component{
    constructor(){
        super();
        this.state={
            name:''
        }
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        const fltrstr={name:this.state.name}
        this.props.filterFunc(fltrstr);
        this.setState({ name:''})
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render(){
        return(
            <div>
                 <form onSubmit={this.handelSubmit}>
                <div>
                <label id="name">Name List</label><br/>
                <input type="text" name="name" id="name" placeholder="enter name.." value={this.state.name} onChange={this.handleChange}/>
                </div>
                <br/>
                </form>
                </div>
        )
    }
}

FormInput.protoTypes={
    filterFunc:PropTypes.func.isRequired,
    
}


export default connect(null,{filterFunc})(FormInput);