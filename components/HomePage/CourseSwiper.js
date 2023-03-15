import React, { useState ,useEffect} from "react"
import { SectionList, StatusBar } from "react-native";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList,ScrollView} from "react-native"
import { Card } from "@rneui/themed";
import { Button } from "react-native-elements";
import {firebase} from "../config.js";
import { collection, doc, getDocs ,addDoc, QuerySnapshot } from "firebase/firestore";
import aboutStyle from "./aboutUsStyle.js";
const ListItem=()=>{
const [courses ,setcourses]=useState([])
const courseRef =firebase.firestore().collection("courses")
useEffect( async ()=>{
courseRef
.onSnapshot(
  querySnapshot =>{
    const courses=[]
querySnapshot.forEach(doc => {
  const all=doc.data()
  courses.push(
   all
  )
});
 
setcourses(courses)
}
)  
}

,[])
return(
  <> 
  <Text style={aboutStyle.h1Styles}>Explore Courses</Text>
  <ScrollView  style={{width:'100%',backgroundColor:'white'}}
   horizontal={true}
   scrollIndicatorInsets={true}
  >
  {courses.map((Course) => {

return<>
<View style={{width:'410px',height:'100%'}}> 
<Card style={{width:'410px',height:'100%'}}> 
<Card.Image
           style={{ padding: 0 ,justifyContent:'center',resizeMode:'cover'}}
            source={Course.courseImage}
         />
         <Card.Title style={styles.itemText}>{Course.courseName}</Card.Title>
         <Card.Divider />
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Button
              title="Enroll Now"
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: '#010149',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
                justifyContent:'center',
               
              }}
            /></View>
       </Card>
       </View>
       </>
       }

       )}
       </ScrollView>
  </>
)
}
const styles = StyleSheet.create({
  itemText: {
    color: '#010149',
    marginTop: 5,
    fontSize:'20px',
    textAlign:'center'
  },
});
    export default ListItem;

