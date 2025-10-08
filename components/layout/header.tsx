import React from "react";
import { StyleSheet, View } from "react-native";

export function Header() {
  return <View style={styles.header} />;
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#820AD1",
    paddingTop: 38,
    paddingBottom: 24,
    paddingHorizontal: 24,
    minHeight: 250,
  },
});
