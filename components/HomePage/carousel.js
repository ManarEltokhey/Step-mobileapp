
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native';
import AutoScroll from "@homielab/react-native-auto-scroll";
// import { Carousel } from 'react-native-auto-carousel';
import { Carousel } from 'react-carousel-minimal';

const DEVICE_WIDTH = Dimensions.get('window').width;
const Images = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];
const data = [
  {
    image: require('../../assets/bg.jpg'),
    caption:'When one teaches, Two learn'
  },
  {
    image: require('../../assets/bg1.jpg'),
    caption: 'When one teaches, Two learn'
  },
  {
    image: require('../../assets/bg2.jpg'),
    caption: 'When one teaches, Two learn'
  },
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

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
 
  {/* <AutoScroll style={{width:'100%' }} endPaddingWidth={10}>
   <View style={styles.container}>
   <View
          delay={610}
          duration={600}
            style={{width:'412px',textAlign:"center" ,marginLeft:10}}
            > 
            <ImageBackground style={{height:"300px" ,alignItems:"center"}} source={require("../../assets/education.jpg")}>
<Text style={{marginTop:"150px" ,fontWeight:'bold' ,fontSize:"30px"}} >
  you will get certificates and points
</Text>
            </ImageBackground>
            </View>
            <View
          delay={610}
          duration={600}
            style={{width:'412px',textAlign:"center" ,marginLeft:10}}
            > 
            <ImageBackground style={{height:"300px" ,alignItems:"center"}} source={require("../../assets/couses.webp")}>
<Text style={{marginTop:"150px" ,fontWeight:'bold' ,fontSize:"30px"}} >
  providing courses from specialsts 
</Text>
            </ImageBackground>
            </View>
            <View
          delay={610}
          duration={600}
            style={{width:'412px',textAlign:"center" ,marginLeft:10}}
            > 
            <ImageBackground style={{height:"300px" ,alignItems:"center"}} source={require("../../assets/books-bookstore-book-reading-159711.jpeg")}>
<Text style={{marginTop:"150px" ,fontWeight:'bold',color:"white" ,fontSize:"30px"}} >
  we provide books in many catecories
</Text>
            </ImageBackground>
            </View>
   </View>
         

           
  </AutoScroll> */}
   {/* <Carousel>
    <Text>jjjj</Text>
   </Carousel> */}
              
                   <div className="App">
                   <div style={{ textAlign: "center" }}>
                     <div style={{
                       padding: "0 20px"
                     }}>
                       <Carousel
                         data={data}
                         time={2000}
                         width="850px"
                         height="500px"
                         captionStyle={captionStyle}
                         radius="10px"
                        //  slideNumber={true}
                        //  slideNumberStyle={slideNumberStyle}
                         captionPosition="bottom"
                         automatic={true}
                         dots={true}
                         pauseIconColor="white"
                         pauseIconSize="40px"
                         slideBackgroundColor="darkgrey"
                         slideImageFit="cover"
                        //  thumbnails={true}
                        //  thumbnailWidth="100px"
                        //  style={{
                        //    textAlign: "center",
                        //    maxWidth: "850px",
                        //    maxHeight: "500px",
                        //    margin: "40px auto",
                        //  }}
                       />
                     </div>
                   </div>
                 </div>
                 </>
    )
}


export default CarouselSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection:"row"
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