import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { FlashScreenPost } from "../../Components";

const flashScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello From flashScreen </Text>
    </View>
  );
};
export default flashScreen;
