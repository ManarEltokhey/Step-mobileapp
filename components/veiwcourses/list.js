import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View ,Image, ScrollView ,Linking} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import  Count, { addtofav ,deletefav} from "../../store/Action";

export default function LIST({navigation}){
  const [inputval ,setval]=useState("qura");

    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+inputval).
        then((data)=>setdata(data.data.items)).catch((err)=>  alert(err) )
     
      },[arrfav ,inputval ])
    
        function onchange(s){
     if(s.length <=4 && s.length>0 &&s!=="j" )
     {
      setval(s);
     }
     else {
      setval("qura");
     }
    }
const ref =useRef();
const dataa =useSelector((props)=>props.count);
const arrfav =useSelector((props)=>props.fav);
const dispatch=useDispatch();
function handelcount(e  )
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

    <Text style={{...styles.title ,fontSize:30 ,width:100 }}> {dataa} 
    <Icon name= "star"  size={30} color="red" style={{margin:"auto"} } />
     </Text>
        <TextInput
        style={styles.input}
        placeholder="search..."
            onChangeText={(e)=>onchange(e)}

        
      />

  { 
    data.map((ele )=>{ 
      
  
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

{
   ele.isselect=="star"&& arrfav.find(e=>e.id==ele.id) ?   <Icon name= "star"  size={30} color="red"  style={{margin:"auto"} } onPress={(e)=>handelcount(ele)}/>
   :   <Icon name= "star-o"  size={30} color="red"   style={{margin:"auto"} } onPress={()=>handelcount(ele)}/>
}

</Card>
         </>)
    })
  } 
</ScrollView>
        </>)
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