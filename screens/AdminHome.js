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
    {
      id: '7',
      title: '107',
    },
    {
      id: '8',
      title: '108',
    },
    {
      id: '9',
      title: '109',
    },
    {
      id: '10',
      title: '110',
    },
    {
      id: '11',
      title: '111',
    },
    {
      id: '12',
      title: '201',
    },
    {
      id: '13',
      title: '202',
    },
    {
      id: '14',
      title: '203',
    },
    {
      id: '15',
      title: '204',
    },
    {
      id: '16',
      title: '205',
    },
    {
      id: '17',
      title: '206',
    },
    {
      id: '18',
      title: '207',
    },
    {
      id: '19',
      title: '208',
    },
    {
      id: '20',
      title: '209',
    },
    {
      id: '21',
      title: '210',
    },
    {
      id: '22',
      title: '211',
    },
    {
      id: '23',
      title: '212',
    },
    {
      id: '24',
      title: '213',
    },
    {
      id: '25',
      title: '214',
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
          keyExtractor={item=> item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>

     

      
    );
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
    

  },

  item: {
   
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor:"#525FE1",
    borderRadius:25,

  },
  title: {
    fontSize: 20,
    color: 'white',

  },
})