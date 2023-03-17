import { StyleSheet, Text, View } from 'react-native';
import HomeSection from './pages/home';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DETAILS from './components/veiwcourses/details';
import FAVOURITE from './components/veiwcourses/favourite';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import LIST from './components/veiwcourses/list';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Page1 from './components/veiwcourses/Sign_up/SignUp';
import Login from './components/veiwcourses/login';
import NativeComponentEmailInput from './components/veiwcourses/Sign_up/testing';
import ReviewCourse from './pages/reviewCourse';
import ViewCourses from './components/veiwcourses/ViewCourse';
import ViewBooks from './components/veiwcourses/ViewBook';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import CategorySection from './components/category/Categoury';
const Drawer=createDrawerNavigator()
const Tab = createBottomTabNavigator();
function DrawerNav(){
 return(
   
  <Tab.Navigator>
  <Tab.Screen name="HomePage" component= {HomeSection} options={{
    tabBarLabel: '',
    headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'#010149'} size={size} />
        ),
      }}/>
      <Tab.Screen name="favourite" component={FAVOURITE} options={{
    tabBarLabel: '',
    //  tabBarBadge: '' ,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={'#010149'} size={size} />
        ),
      }}/>
       
       <Tab.Screen name="login" component={Login} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="login" color={'#010149'} size={size} />
        ),
      }}/>
       <Tab.Screen name="PreviewCourse" component={ReviewCourse} options={{
    tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark" color={'#010149'} size={size} />
        ),
      }}/>
      
       
      </Tab.Navigator>
      
   )
}
export default function App() {
  
 
  return (
    <Provider store={store}>
    <NavigationContainer >
    <Drawer.Navigator>

  <Drawer.Screen name="HomePage" component={DrawerNav} />
  <Drawer.Screen name='register' component={Page1}/>
  <Drawer.Screen name='FAVOURITE' component={FAVOURITE}/>
  <Drawer.Screen name='Category' component={CategorySection}/>
  <Drawer.Screen name='ViewCourses' component={ViewCourses}  options={{ title: '' }}/>
  <Drawer.Screen name='details' component={DETAILS}   options={{ title: '' }}/>
  <Drawer.Screen name='List' component={LIST}  options={{ title: '' }}/>

 </Drawer.Navigator>
  </NavigationContainer></Provider>
  );
}

const styles = StyleSheet.create({
  
});
