
import React, { useEffect, useState } from "react"
import { Text, View, Image,Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LineSection from "./Line.js";
import reviewCourse from "./reviewCourseStyle.js";
import { Card, Button, Icon } from '@rneui/themed';

import {firebase} from "../config.js";
import { collection, doc, getDocs ,addDoc, QuerySnapshot } from "firebase/firestore";

const AboutCourse = (props) => {
  let Course ="";
  Course=   props.Course ;
  
  return (
    <>
<View>
            <Image source={Course.courseImage} style={reviewCourse.CourseImage}/> 
            <Text style={reviewCourse.CourseName}>{Course.courseName}</Text>
            <LineSection/>
        </View>
<View>
            
                <Text style={reviewCourse.Aboutsection} id='about'>About this Course</Text>
                <Text style={reviewCourse.Aboutparagraphs}>{Course.courseDescription}</Text>
               <LineSection/>
                <Text style={reviewCourse.Aboutsection}>Instructor</Text>
                <Text style={reviewCourse.Aboutparagraphs}>{Course.courseCreator}</Text>
                <LineSection/>
                <Card>
               <Card.Title style={reviewCourse.Aboutsection}>Offerd By</Card.Title>
               <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center'}}
                 source={require('../../assets/Step.png')}
               />
               <Text style={{ marginBottom: 10 }}>
               We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters
               </Text>
             </Card> </View> </>
    
  )
}
export default AboutCourse;