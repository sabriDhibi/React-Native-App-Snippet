import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const store = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello From store </Text>
    </View>
  );
};
export default store;
