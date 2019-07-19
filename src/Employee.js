import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './Employee.css';
import Pagenation from './Pagenation'
import LoadingSpinner from './LoadingSpinner'


import {fetchUser,sortFunc,filterData} from './action/userAction'

class Employee extends Component{
    constructor(){
        super();
        this.state={
            allEmp:[],
            localcurrentEmpList:[],
        }
    }

    componentWillMount(){
        
     this.props.fetchUser()
     
    }
    componentWillReceiveProps(nextProps){
        if(this.state.allEmp.length === 0){
            //this.setState({allEmp:this.props.items})
            this.setState({allEmp:nextProps.items})
        }
        
        if(this.props.fltrstr !== nextProps.fltrstr){
        const filteredElements = this.state.allEmp
        .filter(e => e.employee_name.includes(nextProps.fltrstr.name))
        console.log(filteredElements);
        this.props.filterData(filteredElements)
        }
        if(this.props.currentPage !== nextProps.currentPage || this.props.currentPage == 1){
            const indexOfLastEmp=nextProps.currentPage*nextProps.postPerPAge;
            const indexOffisrtaEmp=indexOfLastEmp-nextProps.postPerPAge;
            const currentEmpList = nextProps.items.slice(indexOffisrtaEmp,indexOfLastEmp)
            console.log(currentEmpList);
            this.setState({localcurrentEmpList:currentEmpList})
        }
        
        
    }
    dynamictable = (emp) => {
        const {id,employee_age,employee_name,employee_salary} =emp
      return (
          <tr key={id}>
              <td>{id}</td>
              <td>{employee_name}</td>
              <td>{employee_age}</td>
              <td>{employee_salary}</td>
              
              </tr>
      )
    }
    _handelClick = (para,data) =>{
        const sortKey = para
        const sortDesc = this.props.sortKey === para? !this.props.sortDesc : false
        
        const tempMyObj = Object.assign({}, data);
        const sorted = this._sortFunc(tempMyObj.items, sortKey, sortDesc)
        this.props.sortFunc(sortKey,sortDesc,sorted)

    }

    _sortFunc = (data, sortKey, sortDesc) => {
        const multiplier = sortDesc ? -1 : 1
        return data.concat().sort((a, b) => {
          const aVal = a[sortKey] || 0
          const bVal = b[sortKey] || 0
          return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0)
        })
      }
    
    
    
    render(){
        debugger
        const resp=(
            <div>
            <table id='students'>
               <tbody>
               <tr>
              <td >id</td>
              <td>NAME</td>
              <td onClick={()=>{this._handelClick('employee_age',this.props)}}>AGE</td>
              <td onClick={()=>{this._handelClick('employee_salary',this.props)}}>SALARY</td>
              
              </tr>
               {this.state.localcurrentEmpList.map(item => (
               this.dynamictable(item)
               ))}
               </tbody>
            </table>
            
            </div>
        )
        
        return(
            <div>
                
                {this.props.loading ? <LoadingSpinner /> : <div>{resp}
                <Pagenation/>
                </div>}
                
                
                </div>
        )
    }
}

Employee.protoTypes={
    fetchUser:PropTypes.func.isRequired,
    sortFunc:PropTypes.func.isRequired,
    filterData:PropTypes.func.isRequired,
    items:PropTypes.array.isRequired,
    fltrstr:PropTypes.object
    
}

const mapStateToProps = state => ({
    loading:state.item.loading,
    items:state.item.items,
    fltrstr:state.item.fltrstr,
    postPerPAge:state.item.postPerPAge,
    currentPage:state.item.currentPage
})

export default connect(mapStateToProps,{sortFunc,fetchUser,filterData})(Employee)