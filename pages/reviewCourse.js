import React from 'react';
import { ScrollView } from 'react-native';
import {
  View,
  StyleSheet
} from 'react-native';
import AboutCourse from '../components/reviewCourse/AboutCourse';
import HeaderSection from '../components/reviewCourse/header';

const ReviewCourse =()=>{

    return(
        <>
  <ScrollView  style={{width:'100%',backgroundColor:'white'}}>
        <View style={{marginRight:'10px',marginLeft:'10px'}}>
        {/* <HeaderSection/> */}
        <AboutCourse/>
        </View>
        </ScrollView>
               </>
    )
}


export default ReviewCourse;

