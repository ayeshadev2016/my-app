
const intialState={
    loading:true,
    items:[],
    sortKey:'',
    sortDesc:'',
    fltrstr:'',
    postPerPAge:10,
    currentPage:1
}

export default function(state=intialState,action){
switch(action.type){
    case 'FETCH_USER':
        return {
            ...state,
            items:action.payload.data,
            loading:action.payload.loading
        }
    case 'SORT_TABLE':
            
            return {
                ...state,
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
            return {
                ...state,
                items:action.data
                   }
    case 'PAGENATE_DATA':
        return {
            ...state,
            currentPage:action.currentPage
               }
    default:
        return state;    
}

}