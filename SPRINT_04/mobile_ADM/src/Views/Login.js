import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

import { AntDesign } from '@expo/vector-icons';

const apiUsuario = {
  id: 1,
  email: "sos",
  senha: "123",
};

function Login({ navigation }) {
  function autenticacao() {
    if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
      navigation.navigate("Ubs");
    } else {
      Alert.alert(
        "Usuario inválido",
        "É necessário informar um usuário válido."
      );
    }
  }

  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styles.caixa}>
      <View>
        <View style={styles.inputs}>
        <AntDesign name="lock" size={70} color="white" />
          <Text style={styles.titulo}>ÁREA DO ADMINISTRADOR</Text>

          <TextInput
            placeholder="username"
            placeholderTextColor="#a47cef"
            style={styles.input}
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          />

          <TextInput
            placeholder="senha"
            style={styles.input}
            placeholderTextColor="#a47cef"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={autenticacao}>
            <Text style={styles.texto}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  caixa: {
    backgroundColor: "#6f42c1",
    width: "100%",
    height: "100%",
  },

  input: {
    width: "70%",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#00b9b3",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    margin: 5,
  },
  btn: {
    backgroundColor: "#00b9b3",
    marginTop: 12,
    padding: 8,
    borderRadius: 10,
    width: "50%",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  texto: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
  },
  titulo: {
    color: "#FFF",
    fontSize: 32,
    marginTop: 20,
    textAlign: "center",
  },
});

export default Login;
