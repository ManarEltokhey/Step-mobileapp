import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight } from "react-native";
 
const NativeComponentEmailInput = () => {
 const [email, setEmail] = useState("");
 
 const handleSubmit = () => {
     console.log(email);
 }
 
 return (
   <SafeAreaView>
     <TextInput
         onChangeText={(text) => setEmail(text)}
         value={email}
         style={styles.emailInput}
         placeholder="Enter your email"
     />
     <TouchableHighlight onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
     </TouchableHighlight>
  </SafeAreaView>
 )
}
const styles = StyleSheet.create({
 emailInput: {
     width: 250,
     height: 50,
     borderWidth: 1,
     borderRadius: 15,
     borderColor: 'black',
     padding: 2,
 },
 button: {
     backgroundColor: 'lightgreen',
     borderRadius: 15,
     marginTop: 25,
     padding: 10,
     alignItems: 'center'
   },
   buttonText: {
     color: 'white'
 }
});
export default NativeComponentEmailInput;