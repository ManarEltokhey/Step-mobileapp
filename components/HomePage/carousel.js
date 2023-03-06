
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Carousel} from 'react-native-auto-carousel'
import AutoScroll from "@homielab/react-native-auto-scroll";

const DEVICE_WIDTH = Dimensions.get('window').width;
const Images = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];


const CarouselSection =()=>{
  // const [data, setData] = useState(
  //   [
  //       {imgSrc:'https://picsum.photos/id/10/200' },
  //       {imgSrc:'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png'},
  //       {imgSrc:'https://cdn.elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png'},
  //   ])

    return(
        <>
                {/* <View style={{flex:1}}>
                   <View style={{flex:4,justifyContent:'center'}}>
     
           <View style={styles.slide1}>
         <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fexpertshare.live%2Fbest-elearning-platforms%2F&psig=AOvVaw26OQxIZsGMot3pbgjYykGh&ust=1678044369722000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDB3caAw_0CFQAAAAAdAAAAABAE.png'}}
         style={{height:'100%',width:'100%'}}/>
       
            </View>
           
                   </View>
        
                </View> */}
                {/* <Carousel
      data={Images}
      renderItem={item => (
        <Image
          key={item}
          src={{uri: item}}
          style={{
            height: '100%',
            width: DEVICE_WIDTH
          }}
        />
      )}
    /> */}
   
   
  {/* {data.map((singledata)=>{
                return<view style={{width:'410px',height:'100%'}}>     
                  <Text>{singledata.imgSrc}</Text>
               </view>
                
             
               
                
               
            }
        
            )} */}
 
  <AutoScroll style={{width:'100%'}} endPaddingWidth={30}>
   
            <Image
            delay={0}
            duration={6000}
            source={require("../../assets/education.jpg")}
            style={{width:'412px',height:'300px',resizeMode:'stretch'}}
            />
           
  </AutoScroll>
   
               </>
    )
}


export default CarouselSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  contentContainerStyle: {
    flexGrow: 1,}
});