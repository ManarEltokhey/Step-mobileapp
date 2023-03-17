import { ScreenWidth } from "@rneui/base";
import React, { useState ,useEffect} from "react"
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image} from "react-native"
import { Button } from "react-native-paper";
import DataList from "./Data";


const CoursrsSection =()=>{
  
const data=[
  '#FF6633',
  '#FFB399',
  '#FF6633',
  '#FFB399',
  '#FF6633',
  '#FFB399',
  '#FF6633',
  '#FFB399',

]

return(
  <>
  <SafeAreaView style={{width:'100%'}}>
<DataList data={data}/>

  </SafeAreaView>
  </>
)
}

const styles=StyleSheet.create({
cardView:{
  marginHorizontal:9,
  borderTopRightRadius:5,
  borderTopLeftRadius:5,
  borderWidth:1,
  borderColor:'red',
  borderBottomLeftRadius:5,
  borderBottomRightRadius:5,
},
image:{
borderTopLeftRadius:5,
borderTopRightRadius:5,
height:150,

},
courseName:{
  fontSize:17,
  fontWeight:'bold',
  color:'red',
  marginTop:5
}
})
export default CoursrsSection;
