
import React from 'react';
import { ScrollView } from 'react-native';
import { restaurantsData } from "../components/HomePage/Data";
import { ScreenWidth } from "@rneui/base";
import {
  View,
  StyleSheet
} from 'react-native';
import CoursrsSection from '../components/HomePage/Courses';

import Aboutus from '../components/HomePage/aboutUs';
import ExerciseHomeScreen from '../components/HomePage/categories';
import CourseSwiper from '../components/HomePage/CourseSwiper';
import NewsItems from '../components/HomePage/NewsSwipper';
import CarouselSection from '../components/HomePage/carousel';
import ReviewCourse from './reviewCourse';


const HomeSection =()=>{

    return(
        <>
       <ScrollView>
        <View style={{width:'100%',backgroundColor:'white'}}>
         <CarouselSection/>  
        <Aboutus/>
        <View style={{height:'470px',backgroundColor:'white'}}>
       <ExerciseHomeScreen/></View>
       <View style={{height:'400px',backgroundColor:'white'}}>
       <CourseSwiper/></View>
       <NewsItems style={{backgroundColor:'white'}}/>

        </View>
        
        </ScrollView>
       
               </>
    )
}


export default HomeSection;

const styles = StyleSheet.create({
 

});