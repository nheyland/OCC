import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./App/screens/Home";
import Bar from "./App/screens/Bar";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Bar"
          options={{ headerShown: false }}
          component={Bar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
