import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";



const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 50,
    textAlign: 'center'
  },
  inputs: {
    width: "100%",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 20,
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
  label:{
    marginTop:20
  }
});

const Notifique = () => {
  
  
  return (
    <View style={styles.caixa}>
       <View style={styles.inputs}>
      <Text style={styles.titulo}>Cadastrar Notificação</Text>
      <Text style={styles.label}>Escolha a UBS</Text>
      <TextInput
          placeholder="Digite a UBS"
          style={styles.input}
          secureTextEntry={true}
        />
        
        <Text style={styles.label}>Data de quando faltou o remedio</Text>
        <TextInput
          placeholder="Digite a data"
          style={styles.input}
          secureTextEntry={true}
        />
       <Text style={styles.label}>Observações e comentarios</Text>
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
};

export default Notifique;
