import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aboutus from './components/HomePage/aboutUs';

import Carousel from './components/HomePage/carousel';
import ExerciseHomeScreen from './components/HomePage/categories';
export default function App() {
  return (
    <View>
      <ExerciseHomeScreen/>
     {/* <Aboutus/>  */}
    
      <StatusBar style="auto" />
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
