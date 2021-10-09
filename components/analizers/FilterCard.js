import React, { useState, memo } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import UnderLine from "../../common/UnderLineSeparator";
import { AppColors } from "../../constants";
import DatePicker from "./DatePicker";
import TitleText from "./TitleText";
import CustomCheckbox from "../../common/CustomCheckbox";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInitialDate,
  selectLastDate,
} from "../../redux/reducers/datePick";
import moment from "moment";

const { height, width } = Dimensions.get("window");

const FilterCard = (props) => {
  // const [value, onChangeDate] = useState("");
  const [fromDate, setFormDate] = useState();
  const [toDate, setToDate] = useState();
  const [test, setTest] = useState(false);

  const selectedDate = (value, fromTo) => {
    let valueFrom = fromDate;
    let valueTo = toDate;
    let formatedDate = moment(value).format("YYYY-MM-DD");
    if (value) {
      if (fromTo == "From") {
        // dispatch(selectInitialDate(moment(value).format("YYYY-MM-DD")));
        setFormDate(formatedDate);
        valueFrom = formatedDate;

        props.parentCallback({ valueFrom, valueTo });
      } else {
        // dispatch(selectLastDate(moment(value).format("YYYY-MM-DD")));
        setToDate(formatedDate);
        valueTo = formatedDate;

        props.parentCallback({ valueFrom, valueTo });
      }
    }
  };

  const selectedDates = useSelector((state) => state.datePick);

  const activityStatus = ["Active", "Super Active", "Bored"];

  const dispatch = useDispatch();
  // const datePick = useSelector((state) => state.datePick);
  console.log("Dates", selectedDates);
  console.log("Dates2", props);

  return (
    <View style={styles.container}>
      <TitleText title="Date" />
      <View style={{ height: 12, justifyContent: "center" }}>
        <UnderLine />
      </View>
      <View style={{ padding: 7 }}>
        <DatePicker fromTo="From" onChangeDate={selectedDate} />
        <DatePicker
          fromTo="To"
          style={{ marginTop: 15 }}
          onChangeDate={selectedDate}
        />
      </View>

      <View style={{ marginTop: 15 }} />
      <TitleText title="Status" />
      <View style={{ height: 16, justifyContent: "center" }}>
        <UnderLine />
      </View>
      <View style={{ paddingVertical: 5, paddingHorizontal: 7 }}>
        {activityStatus.map((item, key) => (
          <View style={styles.filterCheckrow} key={key}>
            <CustomCheckbox />
            <Text style={{ marginLeft: 10 }}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Generate"
          style={{ width: 120 }}
          onPress={
            props.onPress
            // selectedDates.initialDate == fromDate ||
            // selectedDates.lastDate == toDate
            //   ? props.onPress
            //   : null
          }
        />
      </View>
    </View>
  );
};

export default memo(FilterCard);
const styles = StyleSheet.create({
  container: {
    width: width - 60,
    borderColor: AppColors.boxBorder,
    borderWidth: 1,
    marginTop: 50,
    padding: 15,
  },
  titleText: {
    fontSize: 22,
    color: "#256C75",
    fontWeight: "500",
    paddingHorizontal: 7,
  },
  filterCheckrow: {
    height: 30,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    //iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    //Android Shadow
    elevation: 4,
  },
});
