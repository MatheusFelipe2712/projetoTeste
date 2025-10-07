import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type DropdownSpinnerProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function DropdownSpinner({
  label,
  selected = false,
  onPress,
  style,
  textStyle,
}: DropdownSpinnerProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.container, selected && styles.containerSelected, style]}
    >
      <Text
        style={[
          styles.text,
          selected ? styles.selectedText : styles.placeholderText,
          textStyle,
        ]}
      >
        {label}
      </Text>
      <Ionicons name="chevron-down" size={18} color="#B140F0" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F3FB",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ECE3FF",
  },
  containerSelected: {
    borderColor: "#B140F0",
  },
  text: {
    fontSize: 14,
  },
  placeholderText: {
    color: "#9A9A9F",
  },
  selectedText: {
    color: "#1F1B24",
    fontWeight: "600",
  },
});
