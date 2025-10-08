import { PrimaryButton } from "@/components/PrimaryButton";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrocaPontosSucesso() {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeTop} edges={["top"]}>
        <Header />
      </SafeAreaView>

      <View style={styles.screen}>
        <ContentCard style={styles.content}>
          <Text style={styles.successTitle}>Pontos trocados com sucesso!</Text>

          <View style={styles.illustrationCircle}>
            <MaterialIcons name="check" size={46} color="#9B3DF4" />
          </View>

          <Text style={styles.description}>
            Em até <Text style={styles.descriptionHighlight}>7 dias úteis</Text> as milhas serão
            creditadas em sua carteira de milhas escolhida.
          </Text>

          <View style={styles.actions}>
            <PrimaryButton style={styles.primaryButton}>Ir para o início</PrimaryButton>

            <PrimaryButton style={styles.secondaryButton} textStyle={{ color: "#820AD1" }}>
              Voltar para a troca de pontos
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
  primaryButton: {
    backgroundColor: "#1AB1E2",
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#820AD1",
  },
  content: {
    flex: 1,
    marginTop: -50,
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
    marginTop: 40,
    width: "100%",
    gap: 10,
  },
});
