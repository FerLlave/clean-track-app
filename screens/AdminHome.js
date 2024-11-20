import { Text, StyleSheet, View,Image,FlatList,
  StatusBar, } from 'react-native'

import React, {useState} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function AdminHome () {

  const DATA = [
    {
      id: '1',
      title: '101',
      clean: false,
    },
    {
      id: '2',
      title: '102',
      clean: true,
    },
    {
      id: '3',
      title: '103',
      clean: false,
    },
    {
      id: '4',
      title: '104',
    },
    {
      id: '5',
      title: '105',
      clean: true,
    },
    {
      id: '6',
      title: '106',
      clean: true,
    },
    {
      id: '7',
      title: '107',
      clean: true,
    },
    {
      id: '8',
      title: '108',
      clean: true,
    },
    {
      id: '9',
      title: '109',
      clean: true,
    },
    {
      id: '10',
      title: '110',
      clean: true,
    },
    {
      id: '11',
      title: '111',
      clean: true,
    },
    {
      id: '12',
      title: '201',
      clean: true,
    },
    {
      id: '13',
      title: '202',
      clean: true,
    },
    {
      id: '14',
      title: '203',
      clean: true,
      
    },
    {
      id: '15',
      title: '204',
      clean: true,
    },
    {
      id: '16',
      title: '205',
      clean: true,
    },
    {
      id: '17',
      title: '206',
      clean: false,
    },
    {
      id: '18',
      title: '207',
      clean: true,
    },
    {
      id: '19',
      title: '208',
      clean: true,
    },
    {
      id: '20',
      title: '209',
      clean: false,
    },
    {
      id: '21',
      title: '210',
      clean: true,
    },
    {
      id: '22',
      title: '211',
      clean: true,
    },
    {
      id: '23',
      title: '212',
      clean: false,
    },
    {
      id: '24',
      title: '213',
      clean: true,
    },
    {
      id: '25',
      title: '214',
      clean: true,
    },
  ];
  
  const Item = ({room}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{room.title}</Text>
      <Text style = {styles.status}>
        Estado:{room.clean ? 'Limpia' : 'Sucia'}
      </Text>
    </View>
  );
  
    return (

      <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

      <Image source={ require ('../assets/quiamhotel.jpg')} style={styles.adminImage} />
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item room={item} />}
          keyExtractor={item=> item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>

     

      
    );
  };


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:5,

  },

  adminImage:{
    alignSelf: 'center',
    width:400,
    height:160,
    marginBottom:10,
    

  },

  item: {
   alignSelf:'flex-start',
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

  status:{
    fontSize:16,
    color:"white",
    marginTop:5,
  }
})