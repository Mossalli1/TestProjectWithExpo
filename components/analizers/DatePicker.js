import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AppColors } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date(1467676800000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  let currentDate = date;

  const onChange = (event, selectedDate) => {
    console.log("Selected", selectedDate);
    currentDate = selectedDate;
    console.log("Selected....1", currentDate);

    setShow(false);
    setDate(currentDate);
    props.onChangeDate(currentDate, props.fromTo);
  };

  const showMode = (currentMode) => {
    console.log("Mydate", currentMode);
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.fromToText}>{props.fromTo}</Text>
      <TouchableOpacity style={styles.dateContiner} onPress={showDatepicker}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={styles.dateText}>
          {moment(date).format("DD MMMM YYYY")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  dateText: { color: "#888787", fontSize: 16 },
});
