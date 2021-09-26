import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { userOwnProfile } from "../Screens";

const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={userOwnProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
