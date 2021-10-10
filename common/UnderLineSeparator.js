import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const UnderLine = (props) => {
  return <View style={styles.underline} />;
};

export default UnderLine;
const styles = StyleSheet.create({
  underline: {
    backgroundColor: "#B7B7B7",
    height: 1,
  },
});
