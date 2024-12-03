import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

const AssignmentSelect = ({ housekeepers = [], onAssign }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
    onAssign(value);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => handleChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="-" value={null} />
        {housekeepers.map((housekeeper, index) => (
          <Picker.Item label={housekeeper} value={housekeeper} key={index} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
   
  },
 picker: {
    width: 120,
    height: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    
    
   
  },
  pickerItem: {
    fontSize: 16,
    color: '#333', 
    textAlign: 'center',
  },
  
});

export default AssignmentSelect;