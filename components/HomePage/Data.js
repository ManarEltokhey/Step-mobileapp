// export const restaurantsData = [
    // {restaurantName:"Mc Donalds", farAway:"21.2",
    // businessAddress:"22 Bessie street, Cape Town",images:'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
    // averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
    // collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
    // productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    // {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
    //  price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
    //   ],
    // id:0},
    
    // {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
    // images:'https://bukasapics.s3.us-east-2.amazonaws.com/macdo.png',
    // averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
    // discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
    // productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    // {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
    // {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
    //     ],
    // id:1},
    
    // {restaurantName:"Steers", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
    // images:'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
    //  coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
    //   discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
    //  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    //   {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
    //    price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
    //     ],
    //  id:2},
    
    // {restaurantName:"Roman Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
    // images:'https://bukasapics.s3.us-east-2.amazonaws.com/pizza6.png',
    // averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
    // discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
    // productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    //   {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
    //    price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
    //     ],
    // id:3},
    // ]
import React from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import { View } from 'react-native';
const {width}=Dimensions.get('window')
const DataList=({data})=>{
return(
    <FlatList
    data={data}
    keyExtractor={(item)=>String(item)}
    showsHorizontalScrollIndicator={true}
    horizontal
    renderItem={({item})=><View
     style={{backgroundColor:item,height:width/2.6,width:500}}/>}
    />
    
)
}
export default DataList
