
import React from "react"
import {Text, View ,Image} from "react-native";
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LineSection from "./Line.js";
 import reviewCourse from "./reviewCourseStyle.js";
const HeaderSection=()=>{
  
    return(
        <> 
        <View>
            <Image source={require('../../assets/bg.jpg')} style={reviewCourse.CourseImage}/> 
            <Text style={reviewCourse.CourseName}>Course Name</Text>
            <LineSection/>
            <View style={reviewCourse.AboutNav}>
                <View><Text>About</Text></View>
                <View><Text>Review</Text></View>
                <View><Text>Instructor</Text></View>
            </View>
            <LineSection/>
        </View>

  
        
 
        </>
    )
}
export default HeaderSection;