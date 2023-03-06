import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View ,Image, ScrollView ,Linking} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Count, { deletefav } from "../../store/Action";
export default function FAVOURITE({navigation})
{    
    const arrfav =useSelector((props)=>props.fav);
    const reducecount =useSelector((props)=>props.count);
    const dispatch=useDispatch();

function handelcount(e){
    dispatch(deletefav(e))
    dispatch(Count(reducecount -1))
}
return(<ScrollView>   
{ 
        arrfav.map((ele )=>{ 
            return(<>
            <Card key={ele.id} style={{width:"200px"  }}>
         <Image  style={styles.logo} source={{uri:ele.volumeInfo.imageLinks.thumbnail}} />
      <Text style={styles.title}   onPress={()=>navigation.navigate("details" ,{"obj":ele})} 
      >
      {ele.volumeInfo.title}
      </Text>
      <View style={styles.container}>
        <Text style={styles.text2}>pageCount</Text>  
        <Text style={styles.h2}> {ele.volumeInfo.pageCount}</Text>  
         </View>
               
      <View style={styles.container}>
        <Text style={styles.text2}>language</Text>  
        <Text  style={styles.h2}> {ele.volumeInfo.language}</Text>  
         </View>
         <Icon name= "remove"  size={30} color="red"   style={{margin:"auto"} } onPress={()=>handelcount(ele)}/>

    </Card>
             </>)
        })
      } 
      </ScrollView>)
  
}


const   styles=StyleSheet.create({
    logo:{
       width:"250px" ,
       height:"250px" ,
       paddingTop:"100px",
       margin:"auto"  ,
       borderRadius:"5px"
    },
    input: {
      height: 30,
      width:"240px" ,
      margin: "auto",
      marginTop:"10px",
      borderWidth: 1,
      padding: 10,
      backgroundColor:"cornsilk",
      borderRadius:"25px"
    },
    container:
    {flexDirection:"row" ,  margin:"auto"   ,justifyContent:"space-between" 
    ,backgroundColor:"silver" , width:"250px" ,
    marginBottom: "10px",
    borderRadius:"25px"
    ,      
  }  ,
    title:{
        marginBottom: "10px" ,
        width:"200px" ,
        textAlign:"center" ,
        fontWeight:"bold",
        backgroundColor:"wheat" ,
        margin:"auto"  ,
        minHeight:"30px",
        borderRadius:"25px"

       
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
   }
})