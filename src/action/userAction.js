import { async } from "q";
import employeeData from '../employeeData'

export const fetchUser= () => async dispatch => {
    console.log('fetching');
    
    const resp= await employeeData.get();
    debugger;
        dispatch({type:'FETCH_USER',
        payload:{data:resp.data,loading:false}})
    
}

export const sortFunc= (sortKey,sortDesc,sorted)=>{
    //console.log(state);
  return{
      type:"SORT_TABLE",
      payload:{sortKey,sortDesc,sorted}
  }
}

export const filterFunc=(fltrstr)=>{
    return{
        type:"FILTER_STR",
        fltrstr
    }
}
export const filterData=(data)=>{
    return{
        type:"FILTERED_DATA",
        data
    }
}
export const pagenate=(currentPage)=>{
    return{
        type:"PAGENATE_DATA",
        currentPage
    }
}
