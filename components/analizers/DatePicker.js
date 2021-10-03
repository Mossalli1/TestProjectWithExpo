import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { AppColors } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";

const { height, width } = Dimensions.get("window");

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  //   return <View style={[styles.header, props.style]}>{props.children}</View>;
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.fromToText}>{props.fromTo}</Text>
      <View style={styles.dateContiner}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          // display="default"
          onChange={() => onChange()}
          neutralButtonLabel="clear"
        />
        {/* <Text style={{ color: "#888787", fontSize: 16 }}>1 July 2021</Text> */}
      </View>
    </View>
  );
};

export default DatePicker;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateContiner: {
    borderColor: AppColors.boxBorder,
    borderWidth: 1,
    marginLeft: 10,
    height: 40,
    justifyContent: "center",
    width: "83%",
    paddingLeft: 12,
  },
  fromToText: { color: "#428EA3", fontSize: 18, fontWeight: "500" },
});
