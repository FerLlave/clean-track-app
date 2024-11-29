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
    width: 80,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    zIndex:1,
    
  },
  dropdownContainer: {
    width: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    zIndex:2,
  },
});

export default AssignmentSelect;