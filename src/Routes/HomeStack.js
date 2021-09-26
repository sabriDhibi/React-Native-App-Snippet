import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { homeScreen } from "../Screens";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={homeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
