import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { COLORS,SIZES } from './constracts';

let categories = [
  {
    title: 'Mathematics',
     image: require('../../assets/cate2.jpg'),
  },
  {
    title: 'Mental skills',
     image: require('../../assets/cate1.jpg'),
  },
  {
    title: 'Techaning strategy',
     image: require('../../assets/cate2.jpg'),
  },
  {
    title: 'Science',
     image: require('../../assets/cate1.jpg'),
  },
];

const ExerciseHomeScreen = () => {
  const ExerciseItem = ({category}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
           source={category.image}
          style={{
            width: '100%',
            height:'120px',
            resizeMode: 'stretch',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16,color:'#010149'}}>
          {category.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1,position:'relative'}}>
      <Text style={{marginTop: 20, textAlign: 'center', fontSize: 30,color:'#010149'}}>Top categories</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                // height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginBottom: 8,
                marginLeft: -5,
              }}></View>
            <View
              style={{
                // height:3 ,
                backgroundColor: COLORS.white,
                width: '40%',
                marginLeft: 5,
              }}></View>
          </View>
      </View>

      <FlatList
        data={categories}
        style={{
          paddingHorizontal: 20,
          marginTop: -60,
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem category={item} />}
      />
    </SafeAreaView>
  );
};

export default ExerciseHomeScreen;