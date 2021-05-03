import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Agenda, Calendar, CalendarList } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import CalModule from "../content/CalModule";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalModule />
    </SafeAreaView>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    paddingTop: 100,
    paddingLeft: 30,
    fontFamily: "Avenir-Roman",
    fontSize: 24,
    alignSelf: "flex-start",
  },
});
