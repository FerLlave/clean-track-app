import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  StatusBar,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import RoomData from "./RoomData";

export default function AdminHome() {
  const Item = ({ room }) => (
    <View style={styles.itemRow}>
      <View style={styles.roomNumber}>
        <Text style={styles.title}> {room.title} </Text>
      </View>
      <View style={styles.roomStatus}>
        <Text style={styles.status}>{room.clean ? "Limpia" : "Sucia"}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/quiamhotel.jpg")}
          style={styles.adminImage}
        />
        <View style={styles.header}>
          <Text style = {styles.headerTitle}> Habitación </Text>
          <Text style = {styles.headerTitle}> Sucia/Limpia</Text>
          <Text style = {styles.headerTitle}>Asignacion</Text>
        </View>

        <FlatList
          data={RoomData}
          renderItem={({ item }) => <Item room={item} />}
          keyExtractor={(item) => item.title}
        />


      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 5,
    justifyContent: "center",
  },

  adminImage: {
    alignSelf: "center",
    width: 400,
    height: 160,
    marginBottom: 10,
  },

  header:{
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   
  },

  headerTitle :{
    fontSize:19,
    fontWight:'bold',
    color:'white',
    backgroundColor: "#525FE1",
    borderRadius:15,
    padding:5,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#525FE1",
    borderRadius: 25,
  },
  roomNumber: {
    flex: 1,
  },

  roomStatus: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  status: {
    fontSize: 16,
    color: "white",
  },
});
