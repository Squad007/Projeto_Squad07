import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";

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
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/logo.svg")}
      ></Image>

      <View>
        <Text style={styles.titulo}>ÁREA DO ADMINISTRADOR</Text>
      </View>

      <View style={styles.caixa}>
        <View style={styles.inputs}>
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

export default Login;
