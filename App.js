import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  // useEffect(() => {
  //   alert("Bom dia!"), [nome];
  // });
  useEffect(() => {
    if (nome.length === 30) {
      alert("30 palavras");
    }
  });

  Mudei = (nome) => {
    setNome(`Bom dia ${nome} tudo beleza!`);
  };

  return (
    <View style={styles.container}>
      <Text>Saudação: {nome}</Text>
      <TextInput
        placeholder="Digite seu nome:"
        style={{ width: 300, height: 70 }}
        onChangeText={Mudei}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
