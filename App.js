import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aboutus from './components/HomePage/aboutUs';

import Carousel from './components/HomePage/carousel';
import ExerciseHomeScreen from './components/HomePage/categories';
import CoursrsSection from './components/HomePage/Courses';
import HomeSection from './components/HomePage/home';
export default function App() {
  return (
    <View>
      <Aboutus/> 
       <ExerciseHomeScreen/> 
{/* <HomeSection/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
