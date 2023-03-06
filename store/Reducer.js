const initialValues ={
    count:0 ,
    fav:[] ,
    booksarr:[]
}
export default function reducer (state=initialValues , action){
    switch( action.type){
        case "COUNT":{
        return({
            ...state,
            count:action.payload
        })
        }
        case "FAVOURITE":{
          
            return({
                ...state,
                fav:[...state.fav ,action.payload]
            })
            }
        case "DELETE":{
          
            var y= state.fav.filter(fav=>fav.id== action.payload.id);
            state.fav.splice ((state.fav.indexOf(y[0])),1)
       
             return({
                 ...state,
                 fav: [...state.fav]
             })
            }

            case "BOOKSLIST":{
                return({
                    ...state,
                   booksarr:action.payload
                })
                }

        default :return state;
    }}