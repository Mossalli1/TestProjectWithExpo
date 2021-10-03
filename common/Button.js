import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../constants";

const { height, width } = Dimensions.get("window");

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryColor,
    height: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonText: { color: "#fff", fontSize: 22, fontWeight: "500" },
});
