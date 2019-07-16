
export const fetchUser= () => dispatch => {
    console.log('fetching');
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(resp=> resp.json())
    .then(data=>
        dispatch({
            type:'FETCH_USER',
        payload:data
        })
    )
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
