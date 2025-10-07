import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  points: string;
  title?: string;
  onPressBack?: () => void;
  onPressHelp?: () => void;
};

export function Header({
  points,
  title = "Trocar pontos",
  onPressBack,
  onPressHelp,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconCircle} onPress={onPressBack}>
          <MaterialIcons name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity style={styles.iconCircle} onPress={onPressHelp}>
          <Text style={styles.helpText}>?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsLabel}>FyDy Pontos</Text>
        <Text style={styles.pointsValue}>{points}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingBottom: 24,
    paddingTop: 38,
    paddingHorizontal: 24,
    backgroundColor: "#820AD1",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.65)",
  },
  helpText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -2,
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
