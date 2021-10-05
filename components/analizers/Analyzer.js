import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  // StatusBar,
} from "react-native";
import { AppColors } from "../../constants";
import CustomHeader from "../../common/CustomHeader";
import Title from "./Title";
import FilterCard from "./FilterCard";

const { height, width } = Dimensions.get("window");

export default function Analyzer(props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        animated={true}
        backgroundColor={AppColors.primaryColor}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      /> */}
      {/* <CustomHeader /> */}
      <Title
        title="User Analyzer"
        subTitle="Select filters to generate report"
      />
      <FilterCard onPress={() => props.navigation.navigate("Users")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: AppColors.primaryColor,
    height: 70,
    width: width,
    marginTop: 35,

    //Ios Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    //Android Shadow
    elevation: 5,
  },
});
