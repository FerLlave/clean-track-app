import React , { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import RoomItem from "../components/RoomItem";
import Header from "../components/Header";

const AdminHome = () => {

  const [rooms, setRooms] = useState(RoomData);
  const housekeepers = ["Caro", "Janet" ]; 

  const handleAssign = (roomTitle, housekeeper) => {
    const updatedRooms = rooms.map((room) =>
      room.title === roomTitle ? { ...room, housekeeper } : room
    );
    setRooms(updatedRooms);
  };



  return (


    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={rooms}
          renderItem={({ item }) =>(
             <RoomItem
              room={item}
              housekeepers={housekeepers}
              onAssign= {handleAssign}
            />
  )}
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
});

export default AdminHome;









































{/* import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import RoomData from "../components/RoomData";
import Switch from "../components/Switch";

export default function AdminHome() {
  const Item = ({ room }) => (
    <View style={styles.itemRow}>
      <View style={styles.roomNumberContainer}>
        <Text style={styles.roomTitle}> {room.title} </Text>
      </View>

      <View style={styles.switchContainer}>

        <Switch></Switch> 
        
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
          <Text style={styles.headerTitle}> Habitación </Text>
          <Text style={styles.headerTitle}> Limpia/Sucia</Text>
          <Text style={styles.headerTitle}>Asignacion</Text>
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

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  headerTitle: {
    fontSize: 19,
    fontWight: "bold",
    color: "white",
    backgroundColor: "#525FE1",
    borderRadius: 15,
    padding: 5,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    alingnSelf: "strech",
    width: "100%",
  },

  roomTitle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#525FE1",
    borderRadius: 15,
    padding: 10,
    marginLeft: 27,
    marginTop: 10,
  },

  switchContainer: {
    marginTop:10,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
    
  },

  status: {
    fontSize: 16,
    color: "white",
  },
});*/}
