import React, { useEffect, useState } from "react"
import {Text, View ,Image, ScrollView} from "react-native";
import { Button } from "react-native-elements";

 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from "@rneui/themed";
import categoryStyle from "./CategoryStyle.js";
const CategorySection=({navigation})=>{
    const catogries=[ { title:"Discipline methods"  , count:6  ,id:"Discipline_methods",image: require('../../assets/evaluation.webp')} , 
    {title:"Dealing with special needs children",count:10 ,id:"Dealing_with_children_with_special_needs",image: require('../../assets/special.jpeg')}
    ,{title:"Teaching strategy", count:6 ,id:"Teaching_strategies",image: require('../../assets/TS2.jpg')} ,
    {title:"mathematics", count:7 ,id:"Mathematics", image: require('../../assets/Math.jpg')} ,
    {title: "Mental skills", count:20 ,id:"Mental_Skills",image: require('../../assets/MS.jpg')} ,
    {title:"Human development " , count:6 ,id:"Human_Development",image: require('../../assets/HD.webp')}
    ,{title:"Sciences", count:8 ,id:"Science",image: require('../../assets/SC.jpg')},{title:"Educational games", count:6 ,id:"Educational_games",image: require('../../assets/EG.jpg')} ,
    {title:"Digital transformation", count:16 ,id:"Digital_transformation",image: require('../../assets/DT.jpg')}];
    return(
        <> 
        <ScrollView  style={{width:'100%',backgroundColor:'white'}}>
      {catogries.map((Category) => {

return<>
   <Card>
               <Card.Title style={categoryStyle.ViewCategoryTiltle}    >{Category.title}</Card.Title>
               <Card.Divider />
               <Card.Image
                 style={{ padding: 0 ,justifyContent:'center',resizeMode:'stretch'}}
                source={Category.image}
               />
               <Text style={categoryStyle.ViewCategoryDescription}>
               {Category.count} Courses
               </Text>
         <View style={{flex:1}}>

         <Button
         onPress={()=>navigation.navigate("List" ,{"obj":Category.id})} 

              title="Books"
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: '#010149',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
               width:'40%',
                marginTop:10,
                justifyContent:'center',
                textAlign:'center'
              }}
              
            />
            <Button

       onPress={()=>navigation.navigate("ViewCourses" ,{"obj":Category.id})} 

              title="Courses"
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: '#010149',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
               width:'40%',
                marginTop:10,
                justifyContent:'center',
                textAlign:'center'
              }}
            />

         </View>


             </Card>
             </>
             }

             )}
             </ScrollView>
</>

        
 
       
    )
}
export default CategorySection;








