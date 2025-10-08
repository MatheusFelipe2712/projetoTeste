import { DropdownSpinner } from "@/components/dropdown-spinner";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import { PrimaryButton } from "@/components/PrimaryButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrocarPontos() {
  const [selectedPontos, setSelectedPontos] = useState("");
  const [selectedPrograma, setSelectedPrograma] = useState("");

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

      <SafeAreaView style={styles.safeTop} edges={["top"]}>
        <Header />
      </SafeAreaView>

      <View style={styles.screen}>
        <View style={styles.headerContent}>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconCircle}>
              <MaterialIcons name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Trocar pontos</Text>

            <TouchableOpacity style={styles.iconCircle}>
              <Text style={styles.helpText}>?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pointsContainer}>
            <Text style={styles.pointsLabel}>FyDy Pontos</Text>
            <Text style={styles.pointsValue}>15.500</Text>
          </View>
        </View>

        <ContentCard style={styles.content}>
          <View>
            <Text style={styles.sectionTitle}>Escolha a quantidade de pontos</Text>

            <DropdownSpinner
              label="Selecione a quantidade de pontos"
              options={["2.000", "5.000", "10.000"]}
              onSelect={(value) => setSelectedPontos(value)}
            />

            <DropdownSpinner
              label="Selecione o programa de Milhas"
              options={["teste 01", "teste 02", "teste 03"]}
              onSelect={(value) => setSelectedPrograma(value)}
            />

            <Text style={[styles.sectionTitle, styles.resumeTitle]}>
              Resumo de sua troca
            </Text>

            <View style={styles.resumeBox}>
              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Seus pontos</Text>
                <Text style={styles.resumeValueHighlight}>15.500</Text>
              </View>

              <View style={[styles.resumeRow, styles.resumeRowDivider]}>
                <Text style={styles.resumeLabel}>Pontos que deseja trocar</Text>
                <Text style={styles.resumeValueHighlight}>2.000</Text>
              </View>

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Seus pontos com a troca</Text>
                <Text style={styles.resumeValueHighlight}>13.500</Text>
              </View>

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Programa escolhido</Text>
                <Text style={styles.resumeValueHighlight}>2.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.actions}>
            <PrimaryButton style={styles.primaryButton}>Trocar</PrimaryButton>

            <PrimaryButton
              style={styles.secondaryButton}
              textStyle={{ color: "#820AD1" }}
            >
              Voltar
            </PrimaryButton>
          </View>
        </ContentCard>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeTop: {
    backgroundColor: "#820AD1",
  },
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContent: {
    position: "absolute",
    top: 38,
    left: 24,
    right: 24,
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
  headerTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  helpText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -2,
  },
  pointsContainer: {
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
    flex: 1,
    marginTop: -50,
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F1B24",
    marginBottom: 12,
  },
  resumeTitle: {
    marginTop: 10,
    marginBottom: 16,
  },
  resumeBox: {
    backgroundColor: "#F5F2FA",
    borderRadius: 18,
    paddingVertical: 8,
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
  resumeLabel: {
    color: "#9C9CA3",
    fontSize: 14,
  },
  resumeValueHighlight: {
    color: "#B140F0",
    fontSize: 14,
    fontWeight: "700",
  },
  actions: {
    marginTop: 24,
    gap: 10,
  },
  primaryButton: {
    backgroundColor: "#1AB1E2",
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#820AD1",
    marginBottom: 50,
  },
});
