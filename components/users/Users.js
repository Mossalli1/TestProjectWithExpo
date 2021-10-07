import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AppColors } from "../../constants";
import UserData from "../../src/data/UserData";
import filterByFromToDate from "./filterByFromToDate";
import { Ionicons } from "@expo/vector-icons";
import FilterCard from "../analizers/FilterCard";
import { useDispatch, useSelector } from "react-redux";


const { height, width } = Dimensions.get("window");

const Users = (props) => {
  const [showModal, setShowModal] = useState(false);

  console.log('Selector', useSelector((state) => state.datePick))

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.filterContainer}
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <Text style={styles.filterText}>Edit Filter</Text>
        <Ionicons
          name="options-outline"
          size={22}
          color={AppColors.seconderyColor}
        />
      </TouchableOpacity>

      <View style={styles.serachContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={22} color="#676667" />
          <TextInput placeholder="Search by name" style={styles.textInput} />
        </View>
      </View>

      <Modal
        animationType={"slide"}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View style={styles.modalViewContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Edit Filter</Text>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
              }}
            >
              <Ionicons
                name="close-outline"
                size={40}
                color={AppColors.titleTextSecondery}
              />
            </TouchableOpacity>
          </View>
          <FilterCard />
        </View>
      </Modal>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View style={styles.container}>
          {UserData().map((item, key) => {
            let userId;
            Object.keys(item.calendar.daysWithDetails).map((dateData, key) => {
              userId = item.calendar.daysWithDetails[dateData].day.userId;
            });

            let status = filterByFromToDate(
              UserData(),
              "2016-07-05",
              "2016-07-05",
              userId
            );
            return (
              <View
                style={[
                  styles.userView,
                  key == 0 || key == 1 ? { marginTop: 5 } : { marginTop: 15 },
                ]}
                key={key}
              >
                <ImageBackground
                  source={{ uri: item.profile.pictureUrl }}
                  style={styles.userImage}
                >
                  <View
                    style={[
                      styles.userIdentityText,
                      {
                        backgroundColor:
                          status.length >= 5
                            ? AppColors.primaryColor
                            : "#D25638",
                      },
                    ]}
                  >
                    <Text style={styles.statusText}>
                      {status.length >= 5 && status.length <= 9
                        ? "Active"
                        : status.length >= 10
                        ? "SuperActive"
                        : "Bored"}
                    </Text>
                  </View>
                </ImageBackground>
                <View style={styles.userIdentityTextContainer}>
                  <Text style={{ color: AppColors.textColor }}>
                    {item.profile.name}
                  </Text>
                  <Text style={{ color: AppColors.textColor }}>{userId}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Users;
const styles = StyleSheet.create({
  mainContainer: { paddingTop: 18, paddingBottom: 50 },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 28,
    paddingBottom: 50,
  },
  userView: {
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  userImage: {
    width: width / 2.4,
    height: 160,
    alignItems: "flex-end",
  },
  userIdentityText: {
    marginRight: 10,
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  userIdentityTextContainer: { paddingLeft: 10, paddingTop: 7 },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: width,
    paddingRight: 15,
  },
  filterText: {
    color: AppColors.seconderyColor,
    fontSize: 16,
    marginRight: 2,
  },
  serachContainer: { paddingTop: 25, paddingBottom: 20 },
  searchBox: {
    flexDirection: "row",
    marginHorizontal: 28,
    borderColor: AppColors.seconderyColor,
    borderWidth: 1,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    marginHorizontal: 10,
    paddingVertical: 9,
  },
  modalViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  modalHeader: {
    flexDirection: "row",
    width: width - 60,
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalHeaderText: {
    fontSize: 24,
    color: AppColors.titleTextSecondery,
    fontWeight: "500",
  },
});
