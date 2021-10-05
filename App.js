import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Analyzer from "./components/analizers/Analyzer";
import UserData from "./src/data/UserData";
import Users from "./components/users/Users";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppColors } from "./constants";

const Stack = createStackNavigator();

function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <Analyzer />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Analyzer}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: AppColors.primaryColor,
            },
          }}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: AppColors.primaryColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
