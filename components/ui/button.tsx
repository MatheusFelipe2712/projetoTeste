import { LinearGradient } from \"expo-linear-gradient\";
import React, { ReactNode } from \"react\";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from \"react-native\";

export type ButtonVariant = \"primary\" | \"secondary\";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const VARIANTS: Record<ButtonVariant, {
  gradient?: [string, string];
  fillColor?: string;
  textColor: string;
  borderColor?: string;
}> = {
  primary: {
    gradient: [\"#24B0FF\", \"#007EFF\"],
    textColor: \"#FFFFFF\",
  },
  secondary: {
    fillColor: \"#FFFFFF\",
    borderColor: \"#C300C7\",
    textColor: \"#C300C7\",
  },
};

export function Button({ children, variant = \"primary\", onPress, style, textStyle }: ButtonProps) {
  const palette = VARIANTS[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.base, variant === \"secondary\" && styles.secondaryBase, style]}
    >
      {palette.gradient ? (
        <LinearGradient
          colors={palette.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.primaryFill}
        >
          <Text style={[styles.text, { color: palette.textColor }, textStyle]}>{children}</Text>
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.secondaryFill,
            palette.borderColor ? { borderColor: palette.borderColor } : null,
            palette.fillColor ? { backgroundColor: palette.fillColor } : null,
          ]}
        >
          <Text style={[styles.text, { color: palette.textColor }, textStyle]}>{children}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    width: \"100%\",
    borderRadius: 40,
    overflow: \"hidden\",
  },
  secondaryBase: {
    borderRadius: 40,
  },
  primaryFill: {
    borderRadius: 40,
    paddingVertical: 16,
    alignItems: \"center\",
  },
  secondaryFill: {
    borderRadius: 40,
    borderWidth: 2,
    paddingVertical: 14,
    alignItems: \"center\",
  },
  text: {
    fontSize: 15,
    fontWeight: \"700\",
  },
});
