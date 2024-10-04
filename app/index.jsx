import { View, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomButton from "../components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <CustomButton
          title="LOGIN"
          func={() => router.replace("/home")}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#161622",
    justifyContent: "center",
    alignConte: "center",
    padding: 50,
  },
  buttonSIZE: {
    width: "50%",
  },
});
