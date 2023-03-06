import React from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import LOGIN from '../components/veiwcourses/login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LIST from '../components/veiwcourses/list';
import DETAILS from '../components/veiwcourses/details';
import { Provider } from 'react-redux';
import{store} from "../store/Store";
import Icon from 'react-native-vector-icons/FontAwesome';
import FAVOURITE from '../components/veiwcourses/favourite';
const Tab = createBottomTabNavigator();
export default function BookPage() {

  return (
   <Provider store={store} >
    <NavigationContainer>
     <Tab.Navigator>
         <Tab.Screen name="home" component={LIST} options={{ title:"" , tabBarIcon:()=> (<Icon name="home" size={30} color="blue"/>)  }}/>
         <Tab.Screen name="details" component={DETAILS}    options={{ title: '' , tabBarIcon:()=> (<Icon name="" />)  }}/>
         <Tab.Screen name="favourite" component={FAVOURITE}    options={{ title: 'FAVOURITE' , tabBarIcon:()=> (<Icon name="star" color="red" size="25px" />)  }}/>
         <Tab.Screen name="login" component={LOGIN}   />
   </Tab.Navigator>
 </NavigationContainer>
 </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"silver"
  },
 

});
