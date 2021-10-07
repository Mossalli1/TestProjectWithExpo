import React from "react";
import Analyzer from "./components/analizers/Analyzer";
import Users from "./components/users/Users";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppColors } from "./constants";

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Analyzer}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: AppColors.primaryColor,
              elevation: 5,
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
              elevation: 5,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
