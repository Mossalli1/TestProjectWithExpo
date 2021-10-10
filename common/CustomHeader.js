import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { AppColors } from "../constants";

const { height, width } = Dimensions.get("window");

const CustomHeader = (props) => {
  return <View style={[styles.header, props.style]}>{props.children}</View>;
};

export default CustomHeader;
const styles = StyleSheet.create({
  header: {
    backgroundColor: AppColors.primaryColor,
    height: 70,
    width: width,
  },
});
