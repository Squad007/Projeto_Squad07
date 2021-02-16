import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";


const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 50,
  },
  inputs: {
    width: "100%",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 12,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    marginLeft: 50,
    marginRight: 50,
  },
  texto: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  textArea: {
    height: 150,
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 12,
    borderRadius: 8,
  },
});

function FaleConosco() {
  return (
    <View style={styles.caixa}>
      <View>
        <Text style={styles.titulo}>Enviar Mensagem</Text>
      </View>

      
      <View style={styles.inputs}>
        <Text>Nome</Text>
        <TextInput placeholder="Digite seu Nome" style={styles.input} />
        <Text>Email(opcional)</Text>
        <TextInput
          placeholder="Digite seu E-mail"
          style={styles.input}
          secureTextEntry={true}
        />
        <Text>Mensagem</Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Digite uma mensagem"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FaleConosco;
