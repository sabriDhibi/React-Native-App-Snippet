import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { flashScreen } from "../Screens";

const FlashStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Flash Tv" component={flashScreen} />
    </Stack.Navigator>
  );
};

export default FlashStack;
