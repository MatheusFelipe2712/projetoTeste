import { PrimaryButton } from "@/components/PrimaryButton";
import { DropdownSpinner } from "@/components/dropdown-spinner";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrocaPontosResumo() {
  const [selectedPontos, setSelectedPontos] = useState("");
  const [selectedPrograma, setSelectedPrograma] = useState("");

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

      <SafeAreaView style={styles.safeTop} edges={["top"]}>
        <Header />
      </SafeAreaView>

      <View style={styles.screen}>
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
              options={["Teste 01", "Teste 02", "Teste 03"]}
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

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Pontos que deseja trocar</Text>
                <Text style={styles.resumeValueHighlight}>
                  {selectedPontos || "-"}
                </Text>
              </View>

              <View style={styles.innerDivider} />

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Seus pontos com a troca</Text>
                <Text style={styles.resumeValueMuted}>
                  {selectedPontos
                    ? 15500 - parseInt(selectedPontos.replace(".", ""))
                    : "-"}
                </Text>
              </View>

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Milhas a receber</Text>
                <Text style={styles.resumeValueHighlight}>
                  {selectedPontos || "-"}
                </Text>
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
  content: {
    flex: 1,
    marginTop: -50,
    justifyContent: "space-between",
  },
  primaryButton: {
    backgroundColor: "#E5E2EA",
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#820AD1",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F1B24",
    marginBottom: 5,
  },
  resumeTitle: {
    marginTop: 12,
    marginBottom: 9,
  },
  resumeBox: {
    marginBottom: 28.5,
    backgroundColor: "#F5F2FA",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 6,
  },
  resumeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  innerDivider: {
    height: 1,
    backgroundColor: "rgba(222, 214, 240, 0.8)",
    marginVertical: 6,
  },
  resumeValueMuted: {
    color: "#B6B6BD",
    fontSize: 14,
    fontWeight: "600",
  },
  actions: {
    marginTop: -5,
    gap: 10,
  },
});
