import React from "react";
import { Text, StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";

const CalModule = () => {
  return (
    <>
      <Text style={styles.header}>Calendar</Text>

      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        style={{
          height: 350,
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#b6c1cd",
          indicatorColor: "#b6c1cd",
          textDayFontFamily: "Avenir-Roman",
          textMonthFontFamily: "Avenir-Roman",
          textDayHeaderFontFamily: "Avenir-Roman",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </>
  );
};

export default CalModule;

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
