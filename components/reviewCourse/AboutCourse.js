
import React, { useEffect, useState } from "react"
import { Text, View, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LineSection from "./Line.js";
import reviewCourse from "./reviewCourseStyle.js";
import { Card, Button, Icon } from '@rneui/themed';

import {firebase} from "../config.js";
import { collection, doc, getDocs ,addDoc, QuerySnapshot } from "firebase/firestore";

const AboutCourse = () => {

//  const [courses, setCourses] = useState([])
//  const coursesCollectionRef = collection(db, "courses")
//   console.log(coursesCollectionRef)
//   console.log(courses)
//   useEffect(() => {
//     const getCourses=async()=>{
//         const data=await getDocs(coursesCollectionRef);
//         console.log(data,'ww')

//         setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
//         console.log(docs,'hhhhhh')
//     }
    // getCourses()
    // const q = query(collection(db, "courses"));

    // const querySnapshot = getDocs(q);
    // querySnapshot.map((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // });
    //const querySnapshot = getDocs(collection(db, "courses"));
    
   

  // }, [])
  //  console.log(coursesCollectionRef,'ggggggggggg')
  // console.log(courses,'ooooo')
  
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



console.log(courses)

  return (
    <>
      {courses.map((Course) => {

        return <View style={{ width: '410px', height: '100%' }}>





          <Text>{Course.courseName}</Text>


        </View>



      }

      )}


      {/* <View>
            
                <Text style={reviewCourse.Aboutsection}>About this Course</Text>
                <Text style={reviewCourse.Aboutparagraphs}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
               <LineSection/>
                <Text style={reviewCourse.Aboutsection}>About this Course</Text>
                <Text style={reviewCourse.Aboutparagraphs}>Manar Ahmed</Text>
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
             </Card> */}

      {/* </View> */}






    </>
  )
}
export default AboutCourse;