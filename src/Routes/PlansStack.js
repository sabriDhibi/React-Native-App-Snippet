import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PlansScreen } from "../Screens";

const PlansStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Plans" component={PlansScreen} />
    </Stack.Navigator>
  );
};

export default PlansStack;
