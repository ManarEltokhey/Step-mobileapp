import { ScreenWidth } from "@rneui/base";
import React, { useState ,useEffect} from "react"
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image} from "react-native"
import { Button } from "react-native-paper";
import DataList from "./Data";


const CoursrsSection =()=>{
  

// const images = [
//   "https://cdn.elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png",
//   "https://cdn.elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png",
//   "https://cdn.elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png"
// ];


//     return(
//       <>
//       <TouchableOpacity>
// <View style={{...styles.cardView,width:ScreenWidth}}>
// <Image
// source={{uri:'https://cdn.elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png'}}
// // source={{uri:images}}
// style={{...styles.image,width:ScreenWidth}}
// />
// </View>
// <View>
//   <View>
//     <Text style={styles.courseName}>
//       hhhhh
//     </Text>
//   </View>
//   <View style={{flex:1,flexDirection:'row'}}>
//     <Button>
//       Enroll Now
//     </Button>
//   </View>
// </View>
//       </TouchableOpacity>
      
//       </>
//     )
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
// const [courseData, setData] = useState(
//       [
//           {imgSrc:course1,Details:'is simply dummy text of the printing and typesetting industry. ' ,title:'course1' },
//           {imgSrc:cate2,Details:'is simply dummy text of the printing and typesetting industry.' ,title:'course1' },
//           {imgSrc:course1,Details:'is simply dummy text of the printing and typesetting industry. ' ,title:'course1' },
//           {imgSrc:cate2,Details:'is simply dummy text of the printing and typesetting industry. ' ,title:'course1' },
//           {imgSrc:course1,Details:'is simply dummy text of the printing and typesetting industry. ' ,title:'course1' },
//           {imgSrc:cate2,Details:'is simply dummy text of the printing and typesetting industry. ' ,title:'course1' },
//           {imgSrc:course1,Details:'is simply dummy text of the printing and typesetting industry. ' ,title:'course1' },
//       ])
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
