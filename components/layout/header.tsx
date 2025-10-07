import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  points: string;
  title?: string;
  gradientColors?: [string, string];
  onPressBack?: () => void;
  onPressHelp?: () => void;
};

export function Header({
  points,
  title = "Trocar pontos",
  gradientColors = ["#E200DBFF", "#E200DBFF"],
  onPressBack,
  onPressHelp,
}: HeaderProps) {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.header}
    >
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconCircle} onPress={onPressBack}>
          <MaterialIcons name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity style={styles.iconCircle} onPress={onPressHelp}>
          <MaterialIcons name="help-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsLabel}>FyDy Pontos</Text>
        <Text style={styles.pointsValue}>{points}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingBottom: 24,
    paddingTop: 38,
    paddingHorizontal: 24,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.65)",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  pointsContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 20,
  },
  pointsLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.15,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    marginTop: 4,
    letterSpacing: 0.5,
  },
});
