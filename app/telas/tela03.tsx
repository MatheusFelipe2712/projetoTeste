import { PrimaryButton } from "@/components/PrimaryButton";
import { DropdownSpinner } from "@/components/dropdown-spinner";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TrocaPontosResumo() {
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
            <DropdownSpinner label="2.000" selected />
            <DropdownSpinner label="Smiles" selected />

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
                <Text style={styles.resumeValueHighlight}>2.000</Text>
              </View>

              <View style={styles.innerDivider} />

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Seus pontos com a troca</Text>
                <Text style={styles.resumeValueMuted}>13.500</Text>
              </View>

              <View style={styles.resumeRow}>
                <Text style={styles.resumeLabel}>Milhas a receber</Text>
                <Text style={styles.resumeValueHighlight}>2.000</Text>
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
    backgroundColor: "#1AB1E2",
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#E200DB",
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
    backgroundColor: "#E200DBFF",
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
  divider: {
    height: 1,
    backgroundColor: "#E9E3F5",
    marginVertical: 22,
    opacity: 0.8,
  },
  actions: {
    marginTop: 10,
    gap: 10,
  },
});
