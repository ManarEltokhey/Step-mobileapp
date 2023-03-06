import React from "react";
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function DETAILS({navigation,route}){
    var data ="";
    data=   route.params.obj.volumeInfo ;

    return(<>
    
    <ScrollView>
        <Card  style={{width:"200px"  }}>
        <Image  style={styles.logo} source={{uri:data.imageLinks.thumbnail}} />
     <View style={styles.title }   onPress={()=>navigation.navigate("details" ,{"obj":ele})} >
     {data.title}
     <Text style={{color:"gray"}} > {data.subtitle}</Text>
     </View>
   
     <View style={styles.container}>
       <Text style={styles.text2}>authors</Text>  
       <Text  style={styles.h2}> {data.authors}</Text>  
        </View>
              

     <View style={styles.container}>
       <Text style={styles.text2}>pageCount</Text>  
       <Text style={styles.h2}> {data.pageCount}</Text>  
        </View>
              
     <View style={styles.container}>
       <Text style={styles.text2}>language</Text>  
       <Text  style={styles.h2}> {data.language}</Text>  
        </View>

        <View style={styles.description}> 
        <Text  style={styles.title}>
    description :
</Text>
        <Text  style={styles.subtitle}>
    {data.description}
</Text>
</View>
   </Card>

   </ScrollView> 

    
        </>)
}



const styles=StyleSheet.create({
    logo:{
       minWidth:"250px" ,
       height:"250px" ,
       paddingTop:"100px",
       margin:"auto"  ,
       borderRadius:"5px"
   
    },
   
    input: {
      height: 30,
      width:"240px" ,
      margin: "auto",
      borderWidth: 1,
      padding: 10,
      backgroundColor:"cornsilk",
      borderRadius:"25px"
    },
    container:
    {flexDirection:"row" ,  margin:"auto"   ,justifyContent:"space-between" 
    ,backgroundColor:"silver" , width:"250px" ,
    marginBottom: "3px",
    borderRadius:"25px"
    ,      
  }  ,
    title:{
        width:"200px" ,
        textAlign:"center" ,
        fontWeight:"bold",
        backgroundColor:"wheat" ,
        margin:"auto"  ,
        minHeight:"30px",
        borderRadius:"25px",
        marginBottom:"10px" ,
        shadowOffset:{width:5,height:4},
    shadowOpacity:.5,
    shadowRadius:3,
    shadowColor:"black" ,

       
    }
    , h2:{
        color:"white" ,
        fontWeight:"bold",
        backgroundColor:"red",
        borderRadius:"25px"
   

    }
   ,text2:{
    color:"white" ,
    fontWeight:"bold" ,
    backgroundColor:"black",
    borderRadius:"25px" ,
    width:"100px" ,
   textAlign:"center"
    
   } ,
   subtitle:{
    marginTop:"5px",
    fontSize:"14px",
    color:"navy",

   } ,
   description:{
    fontSize:"14px",
    backgroundColor:"silver" ,
    minWidth:"250px",
    margin:"auto",
    padding:"3px" ,
    shadowOffset:{width:5,height:4},
    shadowOpacity:.5,
    shadowRadius:3,
    shadowColor:"black" ,
    marginBottom:"5px" ,
    borderRadius:10
   }
})