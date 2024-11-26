import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Switch from "./Switch";

const RoomItem = ({ room }) => {
  return (
    <View style={styles.itemRow}>
      <View style={styles.roomNumberContainer}>
        <Text style={styles.roomTitle}> {room.title} </Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
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
    marginTop: 10,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoomItem;

