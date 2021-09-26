import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";

const homeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello From homeScreen </Text>
    </View>
  );
};

export default homeScreen;
