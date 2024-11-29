import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropdownPicker from 'react-native-dropdown-picker';

const AssignmentSelect = ({ housekeepers = [], onAssign }) => {
  const [open, setOpen] = useState (false);
  const [value,setValue] = useState (null);
  const [items, setItems] = useState ([
    {label : '-', value:null},
    ...housekeepers.map((housekeeper) => ({
      label:housekeeper,
      value:housekeeper,
    })),
  ]);

  const handleChange = (value) =>{
    setValue(value);
    onAssign (value);
  
  };

  return (
    <View style={styles.container}>
      <DropdownPicker 
      open={open}
      value = {value}
      items = {items}
      setOpen= {setOpen}
      setValue = {handleChange}
      setItems = {setItems}
      placeholder = ""
      style = {styles.dropdown}
      dropDownContainerStyle = {styles.dropDownContainer}
      
      />
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: 100,
    height: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    zIndex:10,
    elevation:5,
    
  },
  dropdownContainer: {
    width: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    zIndex:20,
    elevation:10,
  },
});

export default AssignmentSelect;