import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { tvScreen } from "../Screens";

const tvStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tv" component={tvScreen} />
    </Stack.Navigator>
  );
};

export default tvStack;
