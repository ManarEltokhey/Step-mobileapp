import React from "react"
import {Text, View ,Image, Linking} from "react-native";
import aboutStyle from "./aboutUsStyle.js";
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Aboutus=()=>{
  
    return(
        <> 
        {/* <View style={aboutStyle.fullAboutView} >
        <View >
         <View style={aboutStyle.aboutView}>
            <View>
            <h1 style={aboutStyle.h1Styles}>
             About us
            </h1></View>
            <br/>
            <View >
            <Text style={aboutStyle.paragraph}>
            We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters
            </Text></View>
            
          <Button>
            Get started
          </Button>
              <br/>
              <Text>Follow us</Text>
       
            
            
    
            
           
          
            </View>
            </View> </View><br/><br/> */}
            <View style={aboutStyle.fullAboutView}>
            <View style={aboutStyle.aboutView} >
            <Text style={aboutStyle.h1Styles}>
             About us
            </Text>
            <Text style={aboutStyle.paragraph}>
            We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters
            </Text>
            <br/>
            {/* <Button  mode="contained" onPress={() => console.log('Pressed')} style={aboutStyle.buttonStyle}>
            Get started
  </Button> */}
  <View style={aboutStyle.icon}>
      <MaterialCommunityIcons name="facebook" color={"#010149"} size={30} onPress={() =>Linking.openURL('https://www.facebook.com/')} />
        <MaterialCommunityIcons name="twitter" color={"#010149"} size={30} onPress={() => Linking.openURL('https://www.twitter.com/')} />
        <MaterialCommunityIcons name="instagram" color={"#010149"} size={30} onPress={() => Linking.openURL('https://www.instagram.com/')}/>
        <MaterialCommunityIcons name="linkedin" color={"#010149"} size={30}  onPress={() => Linking.openURL('https://www.linkedin.com/')}/>
        </View>
            </View>
            </View>
            <br/>
        </>
    )
}
export default Aboutus;