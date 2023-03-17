import { Card } from "@rneui/themed";
import React, { useEffect, useState } from "react"
import {Text, View ,Image,ScrollView } from "react-native";
import ViewBookss from "./ViewBookStyle.js";
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from "../config.js";
import { useDispatch, useSelector } from "react-redux";
import  Count, { addtofav ,deletefav} from "../../store/Action";


export default function LIST({navigation,route}){
  var Book ="";
  Book=   route.params.obj.volumeInfo ;

    const [books ,setBooks]=useState([])
    const bookRef =firebase.firestore().collection("books")
    useEffect( async ()=>{
    bookRef
    .onSnapshot(
      querySnapshot =>{
        const books=[]
    querySnapshot.forEach(doc => {
      const all=doc.data()
      books.push(
       all
      )
    });
     
    setBooks(books)
    }
    )  
    }
    ,[arrfav  ])
    
    var  coursescategory=books.filter(itm=>itm.bookCategory==Book)

const dataa =useSelector((props)=>props.count);
const arrfav =useSelector((props)=>props.fav);
const dispatch=useDispatch();
function handelcount(e)
{

  dispatch(addtofav(e));
  dispatch(Count(dataa +1))

if(e.isselect=="star"  ){
  e.isselect="star-o" ;
  dispatch(deletefav(e))
  dispatch(Count(dataa -1))
}
else  {
  e.isselect="star";
}
}

 return(<>
    <ScrollView>

    <Text style={{fontSize:30 ,width:100 ,margin:"auto" }}> {dataa} 
    <Icon name= "star"  size={30} color="red" style={{margin:"auto"} } />
     </Text>
        

  { 
    coursescategory.map((Book)=>{ 
      
  
        return(<>
        <Card key={Book.id} style={{width:"200px"  }}>
        <Card.Title style={ViewBookss.ViewBookTiltle}  onPress={()=>navigation.navigate("details" ,{"obj":Book})} >{Book.bookName}</Card.Title>
    <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center',marginBottom:'10px',resizeMode:'stretch'}}
                  source={Book.bookImage}
               />
             <View style={{justifyContent:'center',alignItems:'center'}}>
             {
   Book.isselect=="star"&& arrfav.find(e=>e.id==Book.id) ?   <Icon name= "star"  size={30} color="red"  style={{margin:"auto"} } onPress={(e)=>handelcount(Book)}/>
   :   <Icon name= "star-o"  size={30} color="red"   style={{margin:"auto"} } onPress={()=>handelcount(Book)}/>
}

              </View>


</Card>
         </>)
    })
  } 
</ScrollView>
        </>)
}
