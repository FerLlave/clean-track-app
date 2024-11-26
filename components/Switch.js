import { useState, useEffect, useRef } from "react";
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

export default ({ temporal, isButton = true }) => {
  const AnimatedValues = {
    toogle: useRef(new Animated.Value(0)).current,
  };

  const { toogle } = AnimatedValues;

  const [clean, setClean] = useState(temporal);

  useEffect(() => {
    handleAnimated();
  }, [clean]);

  const handleAnimated = () => {
    Animated.timing(toogle, {
      toValue: clean ? 1 : 0,
      duration: 275,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        translateX: toogle.interpolate({
          inputRange: [0, 1],
          outputRange: [2.5, 25.4],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {isButton ? (
        <TouchableWithoutFeedback onPressIn={() => setClean(!clean)}>
          <View
            style={[
              styles.button,
              { backgroundColor: clean ? "#C08552" : "#49B6b6" },
            ]}
          >
            <Animated.View style={[styles.circle, animatedStyles]} />
            <View style={[styles.title, { left: clean ? 8 : 27 }]} />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View
          style={[
            styles.button,
            { backgroundColor: clean ? "#C08552" : "#49B6b6" },
          ]}
        >
          <Animated.View style={[styles.circle, animatedStyles]} />
          <View style={[styles.title, { left: clean ? 8 : 27 }]} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  button: {
    width: 48,
    height: 24.8,
    justifyContent: "center",
    borderRadius: 35,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 35,
    position: "absolute",
    backgroundColor: "white",
    left: 0,
  },
  title: {
    position: "absolute",
  },
});
