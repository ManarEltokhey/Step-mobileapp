
import React from 'react';
import { ScrollView } from 'react-native';
import { restaurantsData } from "./Data";
import { ScreenWidth } from "@rneui/base";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import CoursrsSection from './Courses';
import { Dimensions } from 'react-native';
import Aboutus from './aboutUs';


const HomeSection =()=>{
    const SCREEN_WIDTH=Dimensions.get('window').width
    return(
        <>
        <View style ={styles.container}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(255, 140, 82,1)"
             />
           
         <ScrollView
         
         stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
         >
            <View>
               <FlatList nestedScrollEnabled={true}
               style={{marginTop:10,marginBottom:10}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
               data={restaurantsData}
               keyExtractor={(item,index)=>index.toString()}
               renderItem={({item})=>(
                <View>
                    <CoursrsSection
                 ScreenWidth={SCREEN_WIDTH*0.8}
                    />
                </View>
               )}              
                />

            </View>
         </ScrollView>
        
         </View>
               </>
    )
}


export default HomeSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

});