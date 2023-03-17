import { Card } from "@rneui/themed";
import React, { useEffect, useState } from "react"
import {Text, View ,Image, ScrollView} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewCoursess from "./ViewCoursesStyle.js";
import { collection, doc, getDocs ,addDoc, QuerySnapshot } from "firebase/firestore";
import {firebase} from "../config.js";
const ViewCourses=({navigation,route})=>{
  var Course ="";
  Course=   route.params.obj ;
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

var  coursescategory=courses.filter(itm=>itm.courseCategory==Course)

    return(
        <> 
        <ScrollView  style={{width:'100%',backgroundColor:'white'}}>
        {coursescategory.map((Course) => {

return<>
   <Card>
               <Card.Title style={ViewCoursess.ViewCourseTiltle} onPress={()=>navigation.navigate("PreviewCourse" ,{"obj":Course})}>{Course.courseName}</Card.Title>
               <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center'}}
                  source={Course.courseImage}
               />
               <Text style={ViewCoursess.ViewCourseDescription}>
               {Course.courseDescription}
               </Text>
             </Card>
             </>
             }

             )}
             </ScrollView>
        </>
    )
}
export default ViewCourses;