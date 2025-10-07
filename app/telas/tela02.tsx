import { PrimaryButton } from "@/components/PrimaryButton";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TrocaPontosSucesso() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.headerWrapper}>
          <Header points="13.500" />
        </View>

        <ContentCard style={styles.content}>
          <Text style={styles.successTitle}>Pontos trocados com sucesso!</Text>

          <View style={styles.illustrationCircle}>
            <MaterialIcons name="check" size={46} color="#9B3DF4" />
          </View>

          <Text style={styles.description}>
            Em até <Text style={styles.descriptionHighlight}>7 dias úteis</Text>{" "}
            as milhas serão creditadas em sua carteira de milhas escolhida.
          </Text>

          <View style={styles.actions}>
            <PrimaryButton style={styles.primaryButton}>
              Ir para o início
            </PrimaryButton>

            <PrimaryButton
              style={styles.secondaryButton}
              textStyle={{ color: "#820AD1" }}
            >
              Voltar para a troca de pontos
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
    borderColor: "#820AD1",
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
    paddingTop: 28,
    paddingBottom: 28,
    alignItems: "center",
    gap: 28,
  },
  successTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F1B24",
    alignSelf: "flex-start",
    marginLeft: 24,
  },
  illustrationCircle: {
    width: 110,
    height: 110,
    borderRadius: 75,
    backgroundColor: "#F0D5FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
    maxWidth: 260,
  },
  descriptionHighlight: {
    color: "#9B3DF4",
    fontWeight: "700",
  },
  actions: {
    marginTop: 71,
    width: "100%",
    gap: 10,
  },
});
