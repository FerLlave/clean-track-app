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
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:5,
    width: "100%",
    
  },

  roomNumberContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start'
  },

  roomTitle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#525FE1",
    borderRadius: 15,
    padding: 20,
  
  },
  switchContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },

  assignmentContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: "flex-end",
    
  },
});

export default RoomItem;

