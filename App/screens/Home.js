import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import AppButton from "../content/AppButton";

const Home = ({ children, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.img} />
      <AppButton text="Login" />
      <AppButton text="Register" onPress={() => navigation.navigate("Bar")} />
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontFamily: "Avenir-Roman",
    fontSize: 40,
    justifyContent: "center",
  },
  sub: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Avenir-Roman",
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 80,
    resizeMode: "contain",
    marginBottom: 150,
  },
});
