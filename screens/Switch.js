import { Switch } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { Animated, View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

export default ({temporal, isButton}) => {

    const [clean, setClean] = useState(temporal)

    return (
        <View style = {StyleSheet.container}>
            <TouchableWithoutFeedback onPressIn={() => setClean(!clean)}>
                <View style ={[ styles.button, {backgroundColor:clean ? '#C08552' : '#49B6b6' }]}>

                    <View style = {styles.circle}/>
                    <View style = {[styles.title, {left: clean ? 8 :27}]}/>

                  

                </View>
            </TouchableWithoutFeedback>


        </View>
      
    )
}

const styles = StyleSheet.create({

    container:{
        justifyContent: "center",
        alignItems:"center",
        bordeRadius:5,

    },
    button: {
        width:48,
        height:24.8,
        justifyContent:'center',
        borderRadius:35,
    },
    circle:{

        width:20,
        height:20,
        borderRadius:35,
        position:'absolute',
        backgroundColor:'white',
        left:0,


    },
    title:{
        position:'absolute',
    }
    
})



