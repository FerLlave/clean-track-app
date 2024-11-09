import { Text, StyleSheet, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Login () {
  
    return (
      <View style= {styles.mainClass}>
        <View>
            <Text>Clean Track </Text>
            <Image source={ require ('../assets/quiamLogo.jpg')} style={styles.profile} />
        </View>

        <View style={styles.card}>
          <View style={styles.cardText}>
              <TextInput placeholder='name@example.com' style= {{paddingHorizontal:15}}/>
          </View>
          
          <View style={styles.cardText}>
            <TextInput placeholder='Password' style= {{paddingHorizontal:15}}/>
          </View>

          <View>
            <TouchableOpacity>
              <Text> Sign In </Text>
            </TouchableOpacity>
          </View>

        </View>



      </View>
    )
  };


const styles = StyleSheet.create({
  mainClass:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'

  },

  profile:{
    width:100,
    height:100,
    borderRadius:50,

  },

  card:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    width:'90%',
    padding:20,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
  },
  cardText:{
    paddingVertical:20,
    backgroundColor:'#cccccc40',
    borderRadius:30,
    marginVertical:10
  }
})