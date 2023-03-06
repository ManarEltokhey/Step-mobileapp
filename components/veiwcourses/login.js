import React, { useState } from "react";
import { Text ,Image } from "react-native-elements";
import { Formik, Field } from 'formik' ;
import * as yup from 'yup';
import { TextInput ,StyleSheet, Button, TouchableOpacity  } from "react-native-web";
import { View } from "react-native";
export default function LOGIN({navigation}) {
return(

    <>
    <Formik
        initialValues={{ username: '', password: '' }}
         validationSchema ={
        yup.object({
        username:yup.string().required("required").min(8,"must be 8 characters or more")
     , password:yup.string().required("required").min(8,"must be 8 characters or more")
       })
             }
            >

{
    props=>(
        <View style={styles.loginContainer}>
                 <Image  style={styles.logo} source={require('../../assets/pexels-pixabay-220326.jpg')} />

        <TextInput
        name="username"
        placeholder="User name"
        style={styles.textInput}
        onChangeText={props.handleChange('username')}
        onBlur={props.handleBlur('username')}
      />
         
      {props.touched.username && props.errors.username ?(
    <Text style={{color:"red"}}> {props.errors.username}
    </Text>
):null}
             <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
        
                 
                />
                      {props.touched.password && props.errors.password ?(
    <Text  style={{color:"red"}} > {props.errors.password}
    </Text>
):null}

<TouchableOpacity style={styles.submit}   onPress= {()=>{ !props.errors.password && !props.errors.username  ?  navigation.navigate("home") :props.handleSubmit}} > submit</TouchableOpacity>

</View>
    )   
}
</Formik>
    </>
)
}


  
const styles = StyleSheet.create({
submit:{backgroundColor:"darkcyan" ,        borderRadius:"5px"
,color:"white"  ,  width:"200px" , textAlign:"center" ,margin:"auto",marginTop:"10px" ,height:"40px" ,fontSize:30 ,fontWeight:"bold" },
 logo:{
        width:'300px' ,
        height:"250px" ,
        paddingTop:"100px",
        margin:"auto"  ,
        borderRadius:"5px"
    
     },

    loginContainer: {
      width: '100%',
    
      backgroundColor: 'powderblue',
      padding: 10,
      elevation: 10,
      height:"700px"

    },
    textInput: {
      height: 40,
      width: '80%',
      margin: "auto",
      marginTop:"2px" ,
      marginBottom:"2px" ,
      backgroundColor: 'lightpink',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
  })