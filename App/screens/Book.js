import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { getToday, addDay, addHour } from "../content/CalUtil";

const Book = () => {
  const today = new Date();
  const dailyHours = getToday(today);
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(20);
  const fakeData = [
    {
      start: "2021-05-03T02:10:50.969Z",
      end: "2021-05-03T02:12:50.969Z",
      address: "12 Hes Ave, Licoln Ave",
      client: "jared Heyland",
      haul: "CAT 330XL",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{today.toDateString()}</Text>
      <ScrollView>
        <View style={styles.day}>
          {dailyHours.map((hour, index) => {
            if (index > start && index < end)
              return (
                <View
                  key={index}
                  style={
                    (hour < fakeData.end &&
                      hour >= fakeData.start &&
                      styles.booked) ||
                    styles.hour
                  }
                >
                  <Text style={styles.time}>
                    {hour.datetime.getHours() == 12
                      ? "12:00 PM"
                      : hour.datetime.getHours() < 12
                      ? hour.datetime.getHours() + ":00 AM"
                      : hour.datetime.getHours() - 12 + ":00 PM"}
                  </Text>
                  <Text>
                    {fakeData.forEach(
                      (x) => Date.parse(x.start) < Date.parse(hour.datetime)
                    )}
                  </Text>
                </View>
              );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Book;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    paddingTop: 20,
    paddingLeft: 30,
    fontFamily: "Avenir-Roman",
    fontSize: 24,
    alignSelf: "flex-start",
  },
  hour: {
    backgroundColor: "white",

    height: 50,
    marginVertical: 1,
    borderRadius: 5,
    padding: 5,
  },
  day: {
    alignSelf: "center",
    backgroundColor: "grey",
    width: "100%",
    padding: 1,
    paddingTop: 5,
  },
  time: {
    fontFamily: "Avenir-Roman",
    fontStyle: "italic",
  },
  booked: {
    backgroundColor: "lightgrey",

    height: 50,
    marginVertical: 1,
    borderRadius: 5,
    padding: 5,
  },
});
