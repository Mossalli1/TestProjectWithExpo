import React, { useState } from "react";
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { AppColors } from "../../constants";
import Title from "./Title";
import FilterCard from "./FilterCard";

//Redux
import { useDispatch } from "react-redux";
import {
  selectInitialDate,
  selectLastDate,
} from "../../redux/reducers/datePick";

const { height, width } = Dimensions.get("window");

export default function Analyzer(props) {
  const [selectedDatesValue, setselectedDatesValue] = useState({});
  const dispatch = useDispatch();

  const callbackFunction = (childData) => {
    setselectedDatesValue(childData);
  };

  const onGenerate = () => {
    dispatch(selectInitialDate(selectedDatesValue.valueFrom));
    dispatch(selectLastDate(selectedDatesValue.valueTo));
    props.navigation.navigate("Users");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title
        title="User Analyzer"
        subTitle="Select filters to generate report"
      />
      <FilterCard
        onPress={() => onGenerate()}
        parentCallback={callbackFunction}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: AppColors.primaryColor,
    height: 70,
    width: width,
    marginTop: 35,

    //Ios Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    //Android Shadow
    elevation: 5,
  },
});
