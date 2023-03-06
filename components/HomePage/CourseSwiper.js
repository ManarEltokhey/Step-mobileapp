import React, { useState ,useEffect} from "react"
import { SectionList, StatusBar } from "react-native";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList} from "react-native"
import { Button } from "react-native-elements";
const ListItem=({item})=>{
    return(
      <View style={styles.item}>
        <Image
        source={{uri:item.uri}}
        style={styles.itemPhoto}
        resizeMode='cover'
        />
        <Text  style={styles.itemText}> {item.text}</Text>
        <Text>{item.details}</Text>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Button
              title="Enroll Now"
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: '#010149',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
               width:'50%',
                marginTop:10,
                justifyContent:'center',
                textAlign:'center'
              }}
            /></View>
      </View>
    )
};
export default()=>{
    return(
        <View  style={styles.container}>
            <StatusBar style='light'/>
            <SafeAreaView style={{flex:1}}>
<SectionList
contentContainerStyle={{paddingHorizontal:10}}
stickySectionHeadersEnabled={false}
sections={SECTIONS}
renderSectionHeader={({section})=>(
    <>
<Text style={styles.sectionHeader}>{section.title}</Text>
{section.horizontal&&(
<FlatList
data={section.data}
horizontal
renderItem={({item})=>{
    return<ListItem item={item}/>;
}}

/>
)}

</>
)}
renderItem={({item,section})=>{
    if(section.horizontal){
        return null;
    } 
    return<ListItem item={item}/>;
}}
/>
            </SafeAreaView>
        </View>
    )
}
const SECTIONS = [
    {
      title: 'Explore Courses',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Course 1',
          uri: 'https://picsum.photos/id/1/200',
          details:'About this course.About this course About this course'
        },
        {
          key: '2',
          text: 'Course 2',
          uri: 'https://picsum.photos/id/10/200',
          details:'About this course.About this course About this course'
        },
  
        {
          key: '3',
          text: 'Course 3',
          uri: 'https://picsum.photos/id/1002/200',
          details:'About this course.About this course About this course'
        },
        {
          key: '4',
          text: 'Course 4',
          uri: 'https://picsum.photos/id/1006/200',
          details:'About this course.About this course About this course'
        },
        {
          key: '5',
          text: 'Course 5',
          uri: 'https://picsum.photos/id/1008/200',
          details:'About this course.About this course About this course'
        },
        {
            key: '6',
            text: 'Course 6',
            uri: 'https://picsum.photos/id/1008/200',
            details:'About this course.About this course About this course'
          },
          
      ],
    },
    
     
  ];
const styles = StyleSheet.create({
    container: {
      flex: 1,
   shadowColor:'#FFFFFF',
    },
    sectionHeader: {
      fontWeight: 'bold',
      fontSize:'20px',
      color: '#010149',
      marginTop: 20,
      marginBottom: 5,
      textAlign:'center'
    },
    item: {
      margin: 10,
    },
    itemPhoto: {
      width:'100%',
      height: 200,
    },
    itemText: {
      color: '#010149',
      marginTop: 5,
      fontSize:'20px',
      textAlign:'center'
    },
    itemDetails:{
      color:'black',
      fontSize:'15px',
      marginTop:10
    }
  });