
const intialState={
    items:[]
}

export default function(state=intialState,action){
switch(action.type){
    case 'FETCH_USER':
        return {
            ...state,items:action.payload
        }
    case 'SORT_TABLE':
            
            return {
                sortKey:action.payload.sortKey,
                sortDesc:action.payload.sortDesc,
                items:action.payload.sorted
                
              }
    case 'FILTER_STR':
        return {
            ...state,
               fltrstr:action.fltrstr
               }
    case 'FILTERED_DATA':
        return Object.assign(state, {items:action.data});
    default:
        return state;    
}

}