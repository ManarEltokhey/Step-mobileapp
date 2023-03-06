import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aboutus from './components/HomePage/aboutUs';
import ExerciseHomeScreen from './components/HomePage/categories';
import CoursrsSection from './components/HomePage/Courses';
import CourseSwiper from './components/HomePage/CourseSwiper';
import DataList from './components/HomePage/Data';
import HomeSection from './components/HomePage/home';
import BookPage from './pages/bookspage';
export default function App() {
  return (
    <View style={{width:'420px'}}>
      <Aboutus/> 
 <CourseSwiper/>
 <ExerciseHomeScreen/>  
<BookPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'200px'
  },
});
