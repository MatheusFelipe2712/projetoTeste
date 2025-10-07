import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type ContentCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function ContentCard({ children, style }: ContentCardProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 28,
  },
});
