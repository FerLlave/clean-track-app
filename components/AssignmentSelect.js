import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AssignmentSelect = ({ housekeepers = [], onAssign }) => {
  const [selectedHousekeeper, setSelectedHousekeeper] = useState(null);

  const handleChange = (value) => {
    setSelectedHousekeeper(value);
    onAssign(value); // Llama al callback para actualizar la asignación
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedHousekeeper}
        onValueChange={handleChange}
        style={styles.picker}
      >
        <Picker.Item label="—" value={null} /> 
        {(housekeepers || []).map((housekeeper) => (
          <Picker.Item
            key={housekeeper}
            label={housekeeper}
            value={housekeeper}
          />
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
    width: 150,
    height: 44,
  },
});

export default AssignmentSelect;