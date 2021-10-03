import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { AppColors } from "../constants";

const { height, width } = Dimensions.get("window");

const UnderLine = (props) => {
  return <View style={styles.underline} />;
};

export default UnderLine;
const styles = StyleSheet.create({
  underline: {
    backgroundColor: "#B7B7B7",
    height: 1,
    // marginTop: 35,
  },
});
