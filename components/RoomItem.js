import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Switch from "./Switch";
import AssignmentSelect from "./AssignmentSelect";

const RoomItem = ({ room, housekeepers, onAssign }) => {
  return (
    <View style={styles.itemRow}>
      <View style={styles.roomNumberContainer}>
        <Text style={styles.roomTitle}> {room.title} </Text>
      </View>
      
      <View style={styles.switchContainer}>
        <Switch />
      </View>
      
      <View style={styles.assignmentContainer}>
        <AssignmentSelect
          housekeepers={housekeepers}
          onAssign={(value) => onAssign(room.title, value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    padding:1,
    width: "100%",
    
  },
  roomTitle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#525FE1",
    borderRadius: 5,
    padding: 20,
    marginLeft: 27,
    marginTop: 10,
  },
  switchContainer: {
    marginTop: 10,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  assignmentContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 15,
  },
});

export default RoomItem;

