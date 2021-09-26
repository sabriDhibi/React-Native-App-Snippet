import * as React from "react";
import HomeStack from "./HomeStack";
import FlashStack from "./FlashStack";
import ProfileStack from "./ProfileStack";
import TvStack from "./TvStack";
import PlansStack from "./PlansStack";
import StoreStack from "./storeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  EvilIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <AntDesign name="home" size={focused ? 32 : 24} color={color} />
            ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            hideWhenScrolling: true,
          }}
        />
        <Tab.Screen
          name="FlashTvScreen"
          component={FlashStack}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Entypo name="flash" size={focused ? 32 : 24} color={color} />
            ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",

            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            hideWhenScrolling: true,
          }}
        />
        <Tab.Screen
          name="TvScreen"
          component={TvStack}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Feather name="tv" size={focused ? 32 : 24} color={color} />
            ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            hideWhenScrolling: true,
          }}
        />

        <Tab.Screen
          name="PlansScreen"
          component={PlansStack}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome
                name="calendar"
                size={focused ? 32 : 24}
                color={color}
              />
            ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            hideWhenScrolling: true,
          }}
        />

        <Tab.Screen
          name="StoreScreen"
          component={StoreStack}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialIcons
                name="storefront"
                size={focused ? 32 : 28}
                color={color}
              />
            ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            hideWhenScrolling: true,
          }}
        />

        <Tab.Screen
          name="ProfileScreen"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <EvilIcons name="user" size={focused ? 45 : 40} color={color} />
            ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            hideWhenScrolling: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
