import React, { useReducer, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { colors } from "react-native-elements";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "@react-navigation/native";
import { StyleSheet } from "react-native";
function Login(){
    const [Email,setEmail]=useState('');
    const [userPass,setuserPass]=useState('');
    const [Error,setError]=useState("")
    const [x,setX]=useState(0);
    const [EmailErr,setEmailErr]=useState("");
    const [PassErr,setPassErr]=useState("");
    const handleSubmit=async(e)=>{
         
        console.log(e.target)
       if( Email.length==0  )
       {
        setEmailErr("This Field is Required")
       }
      if(/.+@.+\.[A-Za-z]+$/.test(Email))
      {
        setEmailErr(" ")
      }
      else(
        setEmailErr("invalid")
      )
    
       if(userPass.length==0)
        {
            setPassErr("Password is required")
        }
       else if(userPass.length<8 )
        {
            setPassErr("Password must be more than 8char")
        }
        else{
            setPassErr("")
        }
        
          e.preventDefault()
         
          try {
            const user = await signInWithEmailAndPassword(auth,Email,userPass);
            console.log(user.user);
            setX(1)
         }
          
         catch(err){
          console.log(err.message)
          if(err.message=="Firebase: Error (auth/wrong-password).")
          {
            setError( "password invalid")
            setX(0)
          }
          else  
          {
            setError( "this email not found")
            setX(0)
          }
           
        }
        

    }
 
  
    return(
        <>
        <View style={{width:"100%",alignItems:"center",backgroundColor:"white",height:'100vh' }} >
          <Text style={{fontSize:"30px" ,fontWeight:"bold", color:"#2B3467"}}>LOGIN</Text>
            <TextInput  
             onChangeText={(txt=>setEmail(txt))}    style={[{width:'50%' , backgroundColor:"#b3d1ff", padding:10,margin:10, color:"black"  ,marginTop:50}  ]}  placeholder="Enter Username"></TextInput>
            <Text style={{color:'red'}}>{EmailErr}</Text>
            <TextInput onChangeText={(txt=>setuserPass(txt))} style={{width:'50%',padding:10  , backgroundColor:"#b3d1ff",margin:10 ,color:"black",marginTop:30}} placeholder="Enter Password" secureTextEntry={true}></TextInput>
            <Text style={{color:'red'}}>{PassErr}</Text>
            <View style={{marginTop:20,width:"20%"}}>
            <Button title="Login" color={"#13005A"}   onPress={(e)=>handleSubmit(e)}></Button>
            </View>
            {x==0&&Email!=''?<Text style={{color:"red"}}>{Error}</Text>:null}
            { x==1&& Email!='' ?<Text  style={{color:"green"}} >login is success </Text>:null} 
        </View>
        </>
    )
}
const styles=StyleSheet.create({
  
})
export default Login;