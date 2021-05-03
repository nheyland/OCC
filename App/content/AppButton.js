import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const AppButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0060D0",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0060D0",
    borderWidth: 10,
    borderRadius: 10,
    width: "80%",
  },
  text: {
    fontFamily: "Avenir-Roman",
    color: "white",
    fontSize: 28,
  },
});
