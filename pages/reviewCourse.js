import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import AboutCourse from '../components/reviewCourse/AboutCourse';
import HeaderSection from '../components/reviewCourse/header';

const ReviewCourse =()=>{

    return(
        <>
        <View style={{marginRight:'10px',marginLeft:'10px'}}>
        <HeaderSection/>
        <AboutCourse/>
        </View>
               </>
    )
}


export default ReviewCourse;

