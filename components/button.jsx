import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ title, func }) {
  return (
    <TouchableOpacity onPress={func} style={styles.buttonContainer}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "white",
    padding: 12,
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    borderRadius: 16,
    backgroundColor: "black",
    marginTop: "auto",
  },
});
