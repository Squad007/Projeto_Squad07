import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



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

const Notificacao = () => {
  
  
  return (
    <View style={styles.inputs}>
      <Text style={styles.titulo}>Cadastrar Notificação</Text>
      <Text style={styles.label}>Escolha a UBS</Text>
        <Select labelId="label" id="select" value="1">
          <MenuItem value="1">Selecione Uma UBS</MenuItem>
          <MenuItem value="10">AMA/UBS INTEGRADA JARDIM HELENA</MenuItem>
          <MenuItem value="20">UBS JARDIM MAIA</MenuItem>
        </Select>
        <Text style={styles.label}>Medicamentos em falta</Text>
        <Select labelId="label" id="select" value="1">
          <MenuItem value="1">Selecione o medicamento</MenuItem>
          <MenuItem value="10">DIPIRONA 2000 MG</MenuItem>
          <MenuItem value="20">FENITOINA 100 MG COMPRIMIDO</MenuItem>
        </Select>
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
       
  );
};

export default Notificacao;
