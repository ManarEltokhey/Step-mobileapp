import { Card } from "@rneui/themed";
import React from "react"
import {Text, View ,Image} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewCoursess from "./ViewCoursesStyle.js";
const ViewCourses=()=>{
  
    return(
        <> 
   <Card>
               <Card.Title style={ViewCoursess.ViewCourseTiltle} >CourseName</Card.Title>
               <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center'}}
                  source={require('../../assets/Math.jpg')}
               />
               <Text style={ViewCoursess.ViewCourseDescription}>
               We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters
               </Text>
             </Card>
        </>
    )
}
export default ViewCourses;