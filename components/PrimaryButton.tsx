import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type PrimaryButtonProps = {
  children: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>; // 👈 adicionamos isso
};

export function PrimaryButton({
  children,
  onPress,
  disabled = false,
  style,
  textStyle, // 👈 recebendo o estilo do texto
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonEnabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: disabled ? "#A9A7AE" : "#FFFFFF" },
          textStyle, // 👈 aplica o estilo vindo de fora
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#E5E2EA",
  },
  buttonEnabled: {
    backgroundColor: "#B140F0",
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
  },
});
