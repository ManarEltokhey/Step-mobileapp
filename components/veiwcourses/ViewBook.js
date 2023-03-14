import { Card } from "@rneui/themed";
import React from "react"
import {Text, View ,Image} from "react-native";
import ViewBookss from "./ViewBookStyle.js";
import { Button } from "react-native-elements";
const ViewBooks=()=>{
  
    return(
        <> 
   <Card>
    <Card.Title style={ViewBookss.ViewBookTiltle} >BookName</Card.Title>
    <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center',marginBottom:'10px'}}
                  source={require('../../assets/Math.jpg')}
               />
             <View style={{justifyContent:'center',alignItems:'center'}}>
               <Button
              title="Open"
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: '#010149',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
               width:'50%',
                marginTop:10,
                justifyContent:'center',
                textAlign:'center'
              }}
            />
              </View>
             </Card>
        </>
    )
}
export default ViewBooks;