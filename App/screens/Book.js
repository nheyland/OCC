import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

const Book = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Book</Text>
    </SafeAreaView>
  );
};

export default Book;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
});
