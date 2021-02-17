import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";

const styles = StyleSheet.create({
  titulo: {
    color: "#28a745",
    fontSize: 32,
    marginTop: 50,
    fontWeight: 'bold'
   
  },
  tituTable: {
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#28a745",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    marginLeft: 50,
    marginRight: 50,
  },
  btnedit:{
    backgroundColor: "#0000FF",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    opacity: 0.5,
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    opacity: 0.5,
   
  },
  texto: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop:30,
    fontWeight:'bold'
  },
  textocad:{
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  textoedit: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  textoexclu: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  }
});

const Medicamentos = () => {
  return (
    <View >
      <Text style={styles.texto}>Bem vindo ao sistema SOS, NAY LOPES! - (NL@ITAU.COM)</Text>
    <Text style={styles.titulo}>Medicamentos</Text>
    <TouchableOpacity style={styles.btn}>
          <Text style={styles.textocad}>CADASTRAR NOVO MEDICAMENTO</Text>
        </TouchableOpacity>
    <DataTable  style={{ padding: 30 }}>
      <DataTable.Header  >
        <DataTable.Title >ID</DataTable.Title>
        <DataTable.Title>NOME</DataTable.Title>
        <DataTable.Title>Nº_NOTIFICAÇÕES</DataTable.Title>
        <DataTable.Title>Ações</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>1106400100500070000</DataTable.Cell>
        <DataTable.Cell>DIPIRONA 2000 MG</DataTable.Cell>
        <DataTable.Cell>6</DataTable.Cell>
        <TouchableOpacity style={styles.btnedit}>
          <Text style={styles.textoedit}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnexclu}>
          <Text style={styles.textoexclu}>Apagar</Text>
        </TouchableOpacity>
      </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell>1106400100600022</DataTable.Cell>
        <DataTable.Cell>IMIPRAMINA CLORIDRATO 25 MG COMPRIMIDO</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
        <TouchableOpacity style={styles.btnedit}>
          <Text style={styles.textoedit}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnexclu}>
          <Text style={styles.textoexclu}>Apagar</Text>
        </TouchableOpacity>
      </DataTable.Row>
     
    </DataTable>
    <Text style={{ marginBottom: "auto", textAlign: "center" }}>
        © Squad 007 Recode Pro 2020 - 2021
      </Text>
  </View>
  );
};

export default Medicamentos;
