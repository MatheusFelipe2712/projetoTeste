import { InputPill } from "@/components/InputPill";
import { ContentCard } from "@/components/layout/content-card";
import { Header } from "@/components/layout/header";
import { PrimaryButton } from "@/components/PrimaryButton";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [cpf, setCpf] = useState("123.456.789-00");
  const [senha, setSenha] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeTop} edges={["top"]}>
        <Header />
      </SafeAreaView>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <ContentCard style={styles.content}>
            <View>
              <Text style={styles.titleInside}>Acesse sua conta</Text>

              <View style={styles.block}>
                <InputPill
                  label="CPF"
                  value={cpf}
                  onChangeText={setCpf}
                  keyboardType="number-pad"
                  placeholder="000.000.000-00"
                />
              </View>

              <View style={styles.block}>
                <InputPill
                  label="Senha"
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Digite aqui"
                  secureTextEntry
                  rightIcon={
                    <View style={styles.infoBadge}>
                      <Text style={styles.infoText}>i</Text>
                    </View>
                  }
                />
              </View>
            </View>

            <View style={styles.actions}>
              <PrimaryButton style={styles.primaryButton}>Acessar</PrimaryButton>

              <PrimaryButton
                style={styles.secondaryButton}
                textStyle={{ color: "#820AD1" }}
              >
                Esqueci minha senha
              </PrimaryButton>

              <View style={styles.newUserSection}>
                <Text style={styles.newUserText}>Você é novo(a) por aqui?</Text>

                <PrimaryButton
                  style={styles.registerButton}
                  textStyle={styles.registerButtonText}
                >
                  Cadastre-se
                </PrimaryButton>
              </View>
            </View>
          </ContentCard>
        </View>
      </TouchableWithoutFeedback>
    </View>
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
  titleInside: {
    fontSize: 16,
    fontWeight: "800",
    color: "#820AD1",
    marginBottom: 10,
    marginLeft: 4,
  },
  block: {
    marginBottom: 5,
  },
  actions: {
    marginTop: 35,
    gap: 10,
  },
  primaryButton: {
    backgroundColor: "#820AD1",
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#820AD1",
  },
  newUserSection: {
    marginTop: 6,
    alignItems: "center",
    gap: 16,
  },
  newUserText: {
    fontSize: 16,
    color: "#9C9CA3",
    fontWeight: "500",
  },
  registerButton: {
    backgroundColor: "#1AB1E2",
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  infoBadge: {
    width: 20,
    height: 20,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#820AD1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  infoText: {
    color: "#820AD1",
    fontWeight: "700",
    fontSize: 12,
    marginTop: -1,
  },
});
