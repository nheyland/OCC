import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./Welcome";
import Book from "./Book";
import Account from "./Account";
import { AntDesign } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Bar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "black",
        activeBackgroundColor: "#F0F0F0",
        style: {
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Welcome}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="black" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: () => (
            <AntDesign name="calendar" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bar;
