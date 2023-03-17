import React from "react";
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ViewBookss from "./ViewBookStyle.js";

export default function DETAILS({navigation,route}){
    var Book ="";
    Book=   route.params.obj.volumeInfo ;

    return(<>
    
    <ScrollView>
    <Card key={Book.id} style={{width:"200px"  }}>
        <Card.Title style={ViewBookss.ViewBookTiltle}  onPress={()=>navigation.navigate("details" ,{"obj":Book})} >{Book.bookName}</Card.Title>
    <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center',marginBottom:'10px',resizeMode:'stretch'}}
                  source={Book.bookImage}
               />
             <View style={{justifyContent:'center',alignItems:'center'}}>
         
         <Text style={{width:"200px" ,fontSize:20 ,color:"blue"  }}> bookCreator: {Book.bookCreator}</Text>
         <Text> bookDescription: {Book.bookDescription}</Text>
         <Text>bookCategory: {Book.bookCategory}</Text>
             {
   Book.isselect=="star"&& arrfav.find(e=>e.id==Book.id) ?   <Icon name= "star"  size={30} color="red"  style={{margin:"auto"} } onPress={(e)=>handelcount(Book)}/>
   :   <Icon name= "star-o"  size={30} color="red"   style={{margin:"auto"} } onPress={()=>handelcount(Book)}/>
}

              </View>


</Card>

   </ScrollView> 

    
        </>)
}

