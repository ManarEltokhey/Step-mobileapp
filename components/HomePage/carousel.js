
import React from 'react';
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



const customImg = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];

const CarouselSection =()=>{
    return(
        <>
                <View style={{flex:1}}>
                   <View style={{flex:4,justifyContent:'center'}}>
     
           <View style={styles.slide1}>
         <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fexpertshare.live%2Fbest-elearning-platforms%2F&psig=AOvVaw26OQxIZsGMot3pbgjYykGh&ust=1678044369722000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDB3caAw_0CFQAAAAAdAAAAABAE.png'}}
         style={{height:'100%',width:'100%'}}/>
       
            </View>
           
                   </View>
        
                </View>
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
});