import React, { useEffect } from "react";
import ViewBookss from "./ViewBookStyle.js";

import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View ,Image, ScrollView ,Linking} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Count, { deletefav } from "../../store/Action";
export default function FAVOURITE({navigation})
{    
    const arrfav =useSelector((props)=>props.fav);
    const reducecount =useSelector((props)=>props.count);
    const dispatch=useDispatch();

function handelcount(e){
    dispatch(deletefav(e))
    dispatch(Count(reducecount -1))
}
return(<ScrollView>   
{ 
        arrfav.map((Book )=>{ 
            return(<>
        <Card>
    <Card.Title style={ViewBookss.ViewBookTiltle} >{Book.bookName}</Card.Title>
    <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center',marginBottom:'10px',resizeMode:'stretch'}}
                  source={Book.bookImage}
               />
             <View style={{justifyContent:'center',alignItems:'center'}}>
             <Icon name= "remove"  size={30} color="red"   style={{margin:"auto"} } onPress={()=>handelcount(Book)}/>

              

              </View>
             </Card>
             </>)
        })
      } 
      </ScrollView>)
  
}






{/* <Card key={ele.id} style={{width:"200px"  }}>
<Image  style={styles.logo} source={{uri:ele.volumeInfo.imageLinks.thumbnail}} />
<Text style={styles.title}   onPress={()=>navigation.navigate("details" ,{"obj":ele})} 
>
{ele.volumeInfo.title}
</Text>
<View style={styles.container}>
<Text style={styles.text2}>pageCount</Text>  
<Text style={styles.h2}> {ele.volumeInfo.pageCount}</Text>  
</View>
      
<View style={styles.container}>
<Text style={styles.text2}>language</Text>  
<Text  style={styles.h2}> {ele.volumeInfo.language}</Text>  
</View>
<Icon name= "remove"  size={30} color="red"   style={{margin:"auto"} } onPress={()=>handelcount(ele)}/>

</Card> */}