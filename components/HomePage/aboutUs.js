import React from "react"
import { Button, Text, View ,Image} from "react-native";

import aboutStyle from "./aboutUsStyle.js";
const Aboutus=()=>{
    return(
        <> 
        <View style={aboutStyle.fullAboutView} >
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
       
              {/* <a href="https://www.facebook.com/"  style={{textDecoration:"none"}}>  <i class="fa-brands fa-facebook icon w-5"></i></a>
              <a href="https://twitter.com/?lang=en" style={{textDecoration:"none"}}> <i class="fa-brands fa-twitter icon w-5"></i></a>
              <a href="https://www.instagram.com/" style={{textDecoration:"none"}}>  <i class="fa-brands fa-instagram icon w-5"></i></a>
                 */}
            
    
            
           
            <Image source={require('../../assets/education.jpg')} style={aboutStyle.imgStyle2}/>
            </View>
            </View> </View><br/><br/>
        </>
    )
}
export default Aboutus;