import { DropdownSpinner } from "@/components/dropdown-spinner";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import { PrimaryButton } from "@/components/PrimaryButton";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TrocarPontos() {
  const [selectedPontos, setSelectedPontos] = useState("");
  const [selectedPrograma, setSelectedPrograma] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.headerWrapper}>
          <Header points="15.500" />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#1AB1E2",
    marginBottom: 0,
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#820AD1",
    marginBottom: 50,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#820AD1",
    paddingBottom: 36,
  },
  content: {
    flex: 1,
    marginTop: -36,
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F1B24",
    marginBottom: 12,
  },
  resumeTitle: {
    marginTop: 22,
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
  resumeRowLast: {
    paddingTop: 5,
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
    marginTop: 35,
    gap: 10,
  },
});
