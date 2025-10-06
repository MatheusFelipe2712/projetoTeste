import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrocaPontosResumo() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.safeArea}>
      <View style={styles.screen}>
        <LinearGradient colors={["#E200DBFF", "#E200DBFF"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
          <View style={styles.headerIcons}>
    <TouchableOpacity style={styles.iconCircle}>
        <Ionicons name="chevron-back" size={18} color="#fff" />
    </TouchableOpacity>

            <Text style={styles.headerTitle}>Trocar pontos</Text>
            <TouchableOpacity style={styles.iconCircle}>
              <Ionicons name="help-outline" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsLabel}>FyDy Pontos</Text>
            <Text style={styles.pointsValue}>15.500</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View>
            <Text style={styles.sectionTitle}>Escolha a quantidade de pontos</Text>
            <TouchableOpacity style={[styles.dropdown, styles.dropdownSelected]}>
              <Text style={styles.dropdownSelectedText}>2.000</Text>
              <Ionicons name="chevron-down" size={18} color="#B140F0" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.dropdown, styles.dropdownSelected]}>
              <Text style={styles.dropdownSelectedText}>Smiles</Text>
              <Ionicons name="chevron-down" size={18} color="#B140F0" />
          </TouchableOpacity>
            <Text style={[styles.sectionTitle, styles.resumeTitle]}>Resumo de sua troca</Text>

            <View style={styles.resumeBox}>
              <View style={styles.resumeRow}>
              <Text style={styles.resumeLabel}>Seus pontos</Text>
              <Text style={styles.resumeValueHighlight}>15.500</Text>
              </View>
              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Pontos que deseja trocar</Text>
                <Text style={styles.resumeValueHighlight}>2.000</Text>
              </View>
              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Seus pontos com a troca</Text>
                <Text style={styles.resumeValueMuted}>13.500</Text>
              </View>
              <View style={[styles.resumeRow, styles.resumeRowLast]}>
                <Text style={styles.resumeLabel}>Milhas a receber</Text>
                <Text style={styles.resumeValueHighlight}>2.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.tradeButton}>
              <LinearGradient colors={["#24B0FF", "#007EFF"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.tradeButtonGradient}>
                <Text style={styles.tradeButtonText}>Trocar</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 16,
  },
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
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
  content: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: -18,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F1B24",
    marginBottom: 12,
  },
  dropdown: {
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
  dropdownSelected: {
    borderColor: "#B140F0",
  },
  dropdownText: {
    color: "#9A9A9F",
    fontSize: 14,
  },
  dropdownSelectedText: {
    color: "#1F1B24",
    fontSize: 14,
    fontWeight: "600",
  },
  resumeTitle: {
    marginTop: 22,
    marginBottom: 16,
  },
  resumeBox: {
    backgroundColor: "#F5F2FA",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  resumeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  resumeRowLast: {
    paddingBottom: 0,
  },
  resumeLabel: {
    color: "#9C9CA3",
    fontSize: 14,
  },
  resumeValueHighlight: {
    color: "#B140F0",
    fontSize: 14,
    fontWeight: "700",
  },
  resumeValueMuted: {
    color: "#B6B6BD",
    fontSize: 14,
    fontWeight: "600",
  },
  actions: {
    marginTop: 20,
    gap: 10,
  },
  tradeButton: {
    width: "100%",
    borderRadius: 999,
    overflow: "hidden",
  },
  tradeButtonGradient: {
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: "center",
  },
  tradeButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  backButton: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#C300C7",
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  backButtonText: {
    color: "#C300C7",
    fontSize: 15,
    fontWeight: "700",
  },
});
