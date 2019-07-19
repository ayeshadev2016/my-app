import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {pagenate} from './action/userAction'

import './Pagenation.css';



class Pagenation extends Component{
    render(){
        const navarr = [];
        const {postPerPAge,items} = this.props;
        const numberOfEmp = items.length;
        for(let i=0 ; i<= Math.ceil(numberOfEmp/postPerPAge) ; i++)
        navarr.push(i);
          
        return(
            <nav>
                <ul>
                {navarr.map(num=>(
                    <li key={num}>
                        <a href='#' onClick={()=>{this.props.pagenate(num)}}>{num}</a>
                    </li>
                ))}
                    </ul>
                </nav>
        )
    }
}

Pagenation.protoTypes={
    postPerPAge:PropTypes.number.isRequired,
    items:PropTypes.array.isRequired,
    fetchUser:PropTypes.func.isRequired,
    
}
const mapStateToProps = state =>({
    items:state.item.items,
    postPerPAge:state.item.postPerPAge
})


export default connect(mapStateToProps,{pagenate})(Pagenation);