import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../constants";
import { Feather } from "@expo/vector-icons";

const CustomCheckbox = (props) => {
  const [checked, setChecked] = React.useState(true);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={
        checked ? styles.checkboxShapeChecked : styles.checkboxShapeUnchecked
      }
    >
      {checked && <Feather name="check" size={20} color="#fff" />}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
const styles = StyleSheet.create({
  checkboxShapeChecked: {
    backgroundColor: AppColors.primaryColor,
    height: 22,
    width: 22,
    alignItems: "center",
    paddingTop: 2,
    paddingLeft: 2,
    justifyContent: "center",
  },
  checkboxShapeUnchecked: {
    height: 22,
    width: 22,
    alignItems: "center",
    paddingTop: 2,
    paddingLeft: 2,
    justifyContent: "center",
    borderColor: AppColors.primaryColor,
    borderWidth: 1,
  },
});
