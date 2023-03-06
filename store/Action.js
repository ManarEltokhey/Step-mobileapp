import axios from "axios"

export default function Count(payload){
    return({
        type:"COUNT" ,
        payload
    })
}

export  function addtofav(payload){
    return({
        type:"FAVOURITE" ,
        payload
    })
}
export  function deletefav(payload){
    return({
        type:"DELETE" ,
        payload
    })
}