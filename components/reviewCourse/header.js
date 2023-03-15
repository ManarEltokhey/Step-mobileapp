

import React, { useEffect, useState } from "react"
import {Text, View ,Image} from "react-native";
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LineSection from "./Line.js";
 import reviewCourse from "./reviewCourseStyle.js";
 import {firebase} from "../config.js";
import { collection, doc, getDocs ,addDoc, QuerySnapshot } from "firebase/firestore";
const HeaderSection=()=>{
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
        {courses.map((Course) => {
return<>
<View>
            <Image source={require('../../assets/bg.jpg')} style={reviewCourse.CourseImage}/> 
            <Text style={reviewCourse.CourseName}>{Course.CourseName}</Text>
            <LineSection/>
            <View style={reviewCourse.AboutNav}>
                <View><Text>About</Text></View>
                <View><Text>Review</Text></View>
                <View><Text>Instructor</Text></View>
            </View>
            <LineSection/>
        </View>
</>
}
)}
        
 
        </>
    )
}
export default HeaderSection;