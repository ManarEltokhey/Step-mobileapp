import { StyleSheet, Text, View } from 'react-native';
import HomeSection from './pages/home';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DETAILS from './components/veiwcourses/details';
import FAVOURITE from './components/veiwcourses/favourite';
import LOGIN from './components/veiwcourses/login';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import LIST from './components/veiwcourses/list';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@rneui/themed';
import { Button, IconButton } from 'react-native-paper';
import { useEffect } from 'react';
import Page1 from './components/veiwcourses/Sign_up/SignUp';
import test from './components/veiwcourses/Sign_up/testing';
import Login from './components/veiwcourses/login';
import NativeComponentEmailInput from './components/veiwcourses/Sign_up/testing';
import ReviewCourse from './pages/reviewCourse';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer >
      
    <Tab.Navigator>
   
  <Tab.Screen name="HomePage" component={HomeSection} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'#010149'} size={size} />
        ),
      }}/>
      <Tab.Screen name="home" component={LIST} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book" color={'#010149'} size={size} />
        ),
      }}/>
      <Tab.Screen name="register" component={Page1} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="inbox" color={'#010149'} size={size} />
        ),
      }}/>
        <Tab.Screen name="login" component={Login} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="login" color={'#010149'} size={size} />
        ),
      }}/>
      {/* <Tab.Screen name="details" component={DETAILS} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark" color={'#010149'} size={size} />
        ),
      }}/> */}
      <Tab.Screen name="PreviewCourse" component={ReviewCourse} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark" color={'#010149'} size={size} />
        ),
      }}/>
      <Tab.Screen name="favourite" component={FAVOURITE} options={{
    tabBarLabel: '',
    //  tabBarBadge: '' ,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={'#010149'} size={size} />
        ),
      }}/>
   
  </Tab.Navigator></NavigationContainer></Provider>
  );
}

const styles = StyleSheet.create({
  
});
