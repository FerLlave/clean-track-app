import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/quiamhotel.jpg")}
        style={styles.headerImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}> Habitación </Text>
        <Text style={styles.headerTitle}> Limpia/Sucia </Text>
        <Text style={styles.headerTitle}> Asignación </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingBottom: 10,
    backgroundColor: "white",
  },
  headerImage: {
    width: "100%",
    height: 160,
    marginBottom: 10,
    alignSelf: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "light",
    color: "white",
    backgroundColor: "#525FE1",
    borderRadius: 15,
    padding: 5,
  },
});

export default Header;