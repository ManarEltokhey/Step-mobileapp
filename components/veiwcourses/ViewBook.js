import { Card } from "@rneui/themed";
import React, { useEffect, useState } from "react"
import {Text, View ,Image,ScrollView } from "react-native";
import ViewBookss from "./ViewBookStyle.js";
import { Button } from "react-native-elements";
import {firebase} from "../config.js";
import { collection, doc, getDocs ,addDoc, QuerySnapshot } from "firebase/firestore";
const ViewBooks=()=>{
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

,[])
    return(
        <> 
           <ScrollView  style={{width:'100%',backgroundColor:'white'}}>
         {books.map((Book) => {

return<>
   <Card>
    <Card.Title style={ViewBookss.ViewBookTiltle} >{Book.bookName}</Card.Title>
    <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center',marginBottom:'10px',resizeMode:'stretch'}}
                  source={Book.bookImage}
               />
             <View style={{justifyContent:'center',alignItems:'center'}}>
               <Button
              title="Open"
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: '#010149',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
               width:'50%',
                marginTop:10,
                justifyContent:'center',
                textAlign:'center'
              }}
            />
              </View>
             </Card>
             </>
             }

             )}
             </ScrollView>
        </>
    )
}
export default ViewBooks;