import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Props = Omit<
  TextInputProps,
  "style" | "onChangeText" | "value" | "placeholder" | "secureTextEntry"
> & {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};

export function InputPill({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  rightIcon,
  containerStyle,
  inputStyle,
  disabled = false,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text
          style={[
            styles.label,
            { color: isFocused ? "#820AD1" : "#6E6A78" },
          ]}
        >
          {label}
        </Text>
      ) : null}

      <View
        style={[
          styles.field,
          { borderColor: isFocused ? "#820AD1" : "#E5E5E5" },
          disabled && { opacity: 0.6 },
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B8B4C2"
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={!disabled}
          style={[styles.input, inputStyle]}
          {...rest}
        />

        {rightIcon ? (
          <TouchableOpacity style={styles.iconContainer} disabled>
            {rightIcon}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    marginLeft: 8,
  },
  field: {
    minHeight: 30,
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#F3F1F6",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: "#1F1B24",
    paddingVertical: 12,
  },
  iconContainer: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
