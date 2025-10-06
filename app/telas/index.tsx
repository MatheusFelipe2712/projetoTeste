import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TrocarPontos() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.header}>
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
        </View>

        <View style={styles.content}>
          <View>
            <Text style={styles.sectionTitle}>Escolha a quantidade de pontos</Text>

            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Selecione a quantidade de pontos</Text>
              <Ionicons name="chevron-down" size={18} color="#B140F0" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Selecione o programa de Milhas</Text>
              <Ionicons name="chevron-down" size={18} color="#B140F0" />
            </TouchableOpacity>

            <Text style={[styles.sectionTitle, styles.resumeTitle]}>Resumo de sua troca</Text>

            <View style={styles.resumeBox}>
            <View style={styles.resumeRow}>
              <Text style={styles.resumeLabel}>Seus pontos</Text>
              <Text style={styles.resumeValueHighlight}>15.500</Text>
            </View>
            <View style={[styles.resumeRow, styles.resumeRowDivider]}>
              <Text style={styles.resumeLabel}>Pontos que deseja trocar</Text>
              <Text style={styles.resumeValueMuted}>-</Text>
            </View>
            <View style={styles.resumeRow}>
              <Text style={styles.resumeLabel}>Seus pontos com a troca</Text>
                <Text style={styles.resumeValueMuted}>-</Text>
              </View>
              <View style={[styles.resumeRow, styles.resumeRowLast]}>
                <Text style={styles.resumeLabel}>{"Voc\u00EA pagar\u00E1"}</Text>
                <Text style={styles.resumeValueMuted}>-</Text>
              </View>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.tradeButton}>
              <Text style={styles.tradeButtonText}>Trocar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
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
    backgroundColor: "#e200dbff",
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
  dropdownText: {
    color: "#9A9A9F",
    fontSize: 14,
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
    paddingVertical: 5,
  },
  resumeRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(222, 214, 240, 0.6)",
  },
  resumeRowLast: {
    borderBottomWidth: 0,
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
    backgroundColor: "#D9D3E4",
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
  },
  tradeButtonText: {
    color: "#8F899D",
    fontSize: 15,
    fontWeight: "700",
  },
  backButton: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#C300C7",
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  backButtonText: {
    color: "#C300C7",
    fontSize: 15,
    fontWeight: "700",
  },
});
