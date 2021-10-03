import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { AppColors } from "../../constants";

const { height, width } = Dimensions.get("window");

const TitleText = (props) => {
  return <Text style={styles.titleText}>{props.title}</Text>;
};

export default TitleText;
const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    color: "#256C75",
    fontWeight: "500",
    paddingHorizontal: 7,
  },
});
