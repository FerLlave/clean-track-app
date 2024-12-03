import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/Header";
import RoomItem from "../components/RoomItem";

const HousekeeperHome = ({ rooms, onAssign }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={rooms}
          renderItem={({ item }) => (
            <RoomItem
              room={item}
              housekeepers={["Caro", "Janet"]}
              onAssign={onAssign}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 5,
    justifyContent: "center",
  },
});

export default HousekeeperHome;