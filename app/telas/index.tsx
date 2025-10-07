import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { DropdownSpinner } from "@/components/dropdown-spinner";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function TrocarPontos() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.headerWrapper}>
          <Header points="15.500" />
        </View>

        <ContentCard style={styles.content}>
          <View>
            <Text style={styles.sectionTitle}>
              Escolha a quantidade de pontos
            </Text>

            <DropdownSpinner label="Selecione a quantidade de pontos" />
            <DropdownSpinner label="Selecione o programa de Milhas" />

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
                <Text style={styles.resumeValueMuted}>-</Text>
              </View>

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Seus pontos com a troca</Text>
                <Text style={styles.resumeValueMuted}>-</Text>
              </View>

              <View style={styles.resumeRowLast}>
                <Text style={styles.resumeLabel}>Você pagará</Text>
                <Text style={styles.resumeValueMuted}>-</Text>
              </View>
            </View>
          </View>

          <View style={styles.actions}>
            <PrimaryButton style={styles.primaryButton}>Trocar</PrimaryButton>

            <PrimaryButton
              style={styles.secondaryButton}
              textStyle={{ color: "#E200DB" }}
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
    backgroundColor: "#E5E2EA",
    marginBottom: 0,
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#E200DB",
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
    backgroundColor: "#E200DB",
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
    paddingVertical: 0,
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
    marginTop: 52,
    gap: 10,
  },
});
