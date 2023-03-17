import React from 'react';
import { ScrollView } from 'react-native';
import {
  View,
  StyleSheet
} from 'react-native';
import AboutCourse from '../components/reviewCourse/AboutCourse';
import HeaderSection from '../components/reviewCourse/header';

const ReviewCourse =({navigation,route})=>{
  var Course ="";
  Course=   route.params.obj ;
    return(
        <>
  <ScrollView  style={{width:'100%',backgroundColor:'white'}}>
        <View style={{marginRight:'10px',marginLeft:'10px'}}>
        {/* <HeaderSection/> */}
        <AboutCourse Course={Course}/>
        </View>
        </ScrollView>
               </>
    )
}


export default ReviewCourse;

