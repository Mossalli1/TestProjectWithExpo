import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { AppColors } from "../../constants";

const { height, width } = Dimensions.get("window");

const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.subTitleText}>{props.subTitle}</Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: AppColors.titleText,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
  },
  subTitleText: { color: AppColors.subTitleText, marginTop: 15, fontSize: 19 },
});
