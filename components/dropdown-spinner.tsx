import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type DropdownSpinnerProps = {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
};

export function DropdownSpinner({ label, options, onSelect }: DropdownSpinnerProps) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value) => {
          setSelectedValue(value);
          onSelect?.(value);
        }}
        style={styles.picker}
        dropdownIconColor="#B140F0"
      >
        <Picker.Item label={label} value="" color="#9A9A9F" />
        {options.map((opt) => (
          <Picker.Item key={opt} label={opt} value={opt} color="#1F1B24" />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F3FB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECE3FF",
    marginBottom: 12,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    color: "#1F1B24",
    paddingHorizontal: 20,
  },
});
