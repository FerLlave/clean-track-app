import { Text, StyleSheet, View,Image,FlatList,
  StatusBar, } from 'react-native'

import React, {useState} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function AdminHome () {

  const DATA = [
    {
      id: '1',
      title: '101',
    },
    {
      id: '2',
      title: '102',
    },
    {
      id: '3',
      title: '103',
    },
    {
      id: '4',
      title: '104',
    },
    {
      id: '5',
      title: '105',
    },
    {
      id: '6',
      title: '106',
    },
  ];
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
    return (

      <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

      <Image source={ require ('../assets/quiamhotel.jpg')} style={styles.adminImage} />
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>

     

      
    )
  };


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'top',
    alignItems:'center',
    backgroundColor:'white',
    paddingTop:5,

  },

  adminImage:{
    width:400,
    height:160,
    

  }
})