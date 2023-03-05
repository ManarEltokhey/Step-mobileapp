import React, { useState ,useEffect} from "react"
import { SectionList, StatusBar } from "react-native";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList} from "react-native"
const ListItem=({item})=>{
    return(
      <View style={styles.item}>
        <Image
        source={{uri:item.uri}}
        style={styles.itemPhoto}
        resizeMode='cover'
        />
        <Text  style={styles.itemText}> {item.text}</Text>
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
      title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://picsum.photos/id/1/200',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://picsum.photos/id/10/200',
        },
  
        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://picsum.photos/id/1002/200',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://picsum.photos/id/1006/200',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
            key: '5',
            text: 'Item text 5',
            uri: 'https://picsum.photos/id/1008/200',
          },
          
      ],
    },
    
     
  ];
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    sectionHeader: {
      fontWeight: '800',
      fontSize: 18,
      color: '#f4f4f4',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
  });