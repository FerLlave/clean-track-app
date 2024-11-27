import react, { useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Modal,FlatList} from 'react-native';

const AssignmentSelect = ({ housekeepers, onAssign }) => {
    const [selectedHousekeeper, setSelectedHousekeeper] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleSelect = (value) => {
      setSelectedHousekeeper(value);
      onAssign(value); // Actualiza la asignación
      setModalVisible(false); // Cierra el modal
    };
  
    return (
      <View style={styles.container}>
        {/* Botón para mostrar el modal */}
        <TouchableOpacity
          style={styles.selectorButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>
            {selectedHousekeeper || "—"} {/* Valor seleccionado o por defecto */}
          </Text>
        </TouchableOpacity>
  
        {/* Modal para mostrar opciones */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={[{ name: "—", value: null }, ...housekeepers.map((h) => ({ name: h, value: h }))]}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelect(item.value)}
                  >
                    <Text style={styles.optionText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    selectorButton: {
      borderWidth: 1,
      borderColor: "#ccc",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: "#f5f5f5",
    },
    buttonText: {
      fontSize: 16,
      color: "#333",
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      width: "80%",
      maxHeight: "50%",
    },
    option: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    optionText: {
      fontSize: 18,
      color: "#333",
    },
  });
  
  export default AssignmentSelect;