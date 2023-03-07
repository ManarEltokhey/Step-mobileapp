import axios from "axios";
import React, { useState ,useEffect} from "react"
import { SectionList, StatusBar } from "react-native";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList,ScrollView} from "react-native"
import { Button } from "react-native-elements";
import { Card } from "@rneui/themed"

const NewsItems=({item})=>{
  
    const [NewsData, setNewsData ] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2023-02-18&sortBy=popularity&apiKey=9af35b4a4fd741f8b76e9f7f51486ac7", 
            
        )
         .then((data) => setNewsData(data.data.articles))
        .catch((err) => console.log(err))
    }, [])

    return(
        
        <>
        <Text style={styles.NewsHeader}>News Feed</Text>
        <ScrollView 
        horizontal={true}
        scrollIndicatorInsets={true}>
        
            {NewsData.map((singleNews)=>{
                return<view style={{width:'410px',height:'100%'}}>     
                    
                <Card style={{width:'410px',height:'100%'}} >
                
               <view>
                    <Card.Title style={styles.NewsText}>
                    {singleNews.title}
                    </Card.Title ></view>
                    <Card.Divider style={{backgroundColor:'black'}}/>
                    
                    <view style={styles.NewsPhoto}> 
                        
                     <Card.Image source={singleNews.urlToImage}/></view>
                    <Text style={styles.NewsDetails}>{singleNews.description}</Text>
                      </Card>
                    
                </view>
               
                
               
            }
        
            )}
            
        </ScrollView>
        </>
            )
}
export default NewsItems

const styles = StyleSheet.create({
   NewsHeader: {
      fontWeight: 'bold',
      fontSize:'20px',
      color: '#010149',
      marginTop: 20,
      marginBottom: 5,
      textAlign:'center'
    },
    NewsPhoto: {
      width:'100%',
      height: 300,
      resizeMode: 'stretch',
      flex:1,
      marginBottom:5
    },
    NewsText: {
      color: '#010149',
      marginTop: 5,
      fontSize:'20px',
      textAlign:'center',
      overflow:'hidden',
      height:'50px'
    },
   NewsDetails:{
      color:'black',
      fontSize:15,
      width:'100%',
      height:'150px',
      marginTop:5,
      flex:1
    }
  });