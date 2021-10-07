import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Analyzer from "./components/analizers/Analyzer";
import Users from "./components/users/Users";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppColors } from "./constants";
import { Provider } from "react-redux";
import { AnalyzerApp } from ".";
import store from "./redux/store";
import Router from "./Router";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      {/* <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>hh</Text>
      </View> */}
      {/* <AnalyzerApp /> */}
      <Router />
    </Provider>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
