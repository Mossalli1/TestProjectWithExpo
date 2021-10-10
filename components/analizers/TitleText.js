import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { AppColors } from "../../constants";

const TitleText = (props) => {
  return <Text style={styles.titleText}>{props.title}</Text>;
};

export default TitleText;
const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    color: AppColors.titleTextSecondery,
    fontWeight: "500",
    paddingHorizontal: 7,
  },
});
