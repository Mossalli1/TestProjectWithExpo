import React, { useState } from "react";
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { AppColors } from "../../constants";
import Title from "./Title";
import FilterCard from "./FilterCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInitialDate,
  selectLastDate,
} from "../../redux/reducers/datePick";

const { height, width } = Dimensions.get("window");

export default function Analyzer(props) {
  const [selectedDatesValue, setselectedDatesValue] = useState({});
  const dispatch = useDispatch();
  // const setPickedDate= ()=>{
  //       dispatch(selectInitialDate(moment(value).format("YYYY-MM-DD")));
  //       dispatch(selectLastDate(moment(value).format("YYYY-MM-DD")));
  // }

  const callbackFunction = (childData) => {
    console.log("Props.....12", childData);

    setselectedDatesValue(childData);
  };

  const onGenerate = () => {
    dispatch(selectInitialDate(selectedDatesValue.valueFrom));
    dispatch(selectLastDate(selectedDatesValue.valueTo));
    props.navigation.navigate("Users");
  };

  console.log("Props.....1", props);
  console.log("State.....2", selectedDatesValue);
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
