import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TrocaPontosSucesso() {
  return (
    <SafeAreaView style={styles.safeArea}>
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
            <Text style={styles.pointsValue}>13.500</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.successTitle}>Pontos trocados com sucesso!</Text>

          <View style={styles.illustrationCircle}>
            <View style={styles.illustrationInnerCircle}>
              <Ionicons name="checkmark" size={46} color="#9B3DF4" />
            </View>
          </View>

          <Text style={styles.description}>
            {"Em at\u00E9 "}
            <Text style={styles.descriptionHighlight}>{"7 dias \u00FAteis"}</Text>
            {" as milhas ser\u00E3o creditadas em sua carteira de milhas escolhida."}
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity activeOpacity={0.85} style={styles.primaryButton}>
              <LinearGradient
                colors={["#24B0FF", "#007EFF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.primaryButtonGradient}
              >
                <Text style={styles.primaryButtonText}>{"Ir para o in\u00EDcio"}</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Voltar para a troca de pontos</Text>
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
    backgroundColor: "#E200DBFF",
  },
  screen: {
    flex: 1,
    backgroundColor: "#E200DBFF",
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
    borderColor: "rgba(255,255,255,0.55)",
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
    marginTop: 6,
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -18,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 28,
    alignItems: "center",
  },
  successTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F1B24",
    marginBottom: 26,
  },
  illustrationCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#F0D5FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
  },
  illustrationInnerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#F9ECFF",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 13,
    color: "#4C4752",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 52,
    maxWidth: 260,
  },
  descriptionHighlight: {
    color: "#9B3DF4",
    fontWeight: "700",
  },
  actions: {
    width: "100%",
    gap: 18,
  },
  primaryButton: {
    borderRadius: 999,
    overflow: "hidden",
  },
  primaryButtonGradient: {
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryButton: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#C300C7",
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  secondaryButtonText: {
    color: "#C300C7",
    fontSize: 15,
    fontWeight: "700",
  },
});
