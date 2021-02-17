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

const apiUsuario = {
  id: 1,
  email: "nayara@teste.com",
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
          <Text style={styles.titulo}>ÁREA DO ADMINISTRADOR</Text>

          <TextInput
            placeholder="Digite o seu username"
            style={styles.input}
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          />

          <TextInput
            placeholder="Digite o senha"
            style={styles.input}
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
    backgroundColor: "#121212",
    width: "100%",
    height: "100%",
  },

  input: {
    width: "70%",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#fff5",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    margin: 5,
  },

  btn: {
    backgroundColor: "#FFF3",
    marginTop: 12,
    padding: 8,
    borderRadius: 10,
    width: "50%",
    opacity: 0.5,
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
