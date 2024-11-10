import { Text, StyleSheet, View, Image, TextInput,TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import appFirebase from '../credentials'
import{getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import AdminHome from './AdminHome';


const auth = getAuth(appFirebase)

export default function Login (props) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const login = async()=>{
    try{
      await signInWithEmailAndPassword(auth, email, password)
      Alert.alert('accediendo')
      props.navigation.navigate ('AdminHome') 
    }catch(error){console.log(error);

    }
    
  }
  
    return (
      <View style= {styles.mainClass}>
        <View>
           
            <Image source={ require ('../assets/quiamLogo.jpg')} style={styles.profile} />
        </View>

        <View style={styles.card}>
          <View style={styles.cardText}>
              <TextInput placeholder='name@example.com' style= {{paddingHorizontal:15}}
              onChangeText={(text)=>setEmail(text)}/>
           
               
          </View>
          
          <View style={styles.cardText}>
            <TextInput placeholder='Password' style= {{paddingHorizontal:15}} secureTextEntry={true}
             onChangeText={(text)=>setPassword(text)}/>
          </View>

          <View style = {styles.mainButton}>
            <TouchableOpacity style = {styles.cardButton}>
              <Text style = {styles.textButton}> Sign In </Text>
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
  },
  mainButton:{
    alignItems:'center',
  },
  cardButton:{
    backgroundColor:'#525FE1',
    borderRadius:30,
    paddingVertical:20,
    width:150,
    marginTop:20

  },
  textButton :{
    textAlign:'center',
    color:'white'
  }
})