import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StoreScreen } from "../Screens";

const StoreStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tv" component={StoreScreen} />
    </Stack.Navigator>
  );
};

export default StoreStack;
