import React from "react";
import { DataTable } from "react-native-paper";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  titulo: {
    color: "#FF0000",
    fontSize: 32,
    marginTop: 50,
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: '20%',
    padding: 10
   
  },
  textoexclu: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  texto: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});
const Notificacao = () => {
  return (
    <View>
       <Text style={styles.texto}>Bem vindo ao sistema SOS, NAY LOPES! - (NL@ITAU.COM)</Text>
      <Text style={styles.titulo}>Notificações</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>UBS/MEDICAMENTO</DataTable.Title>
          <DataTable.Title>DATA</DataTable.Title>
          <DataTable.Title>AÇÕES</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>AMA/UBS INTEGRADA JARDIM HELENA</DataTable.Cell>
          <DataTable.Cell>10/02/2021</DataTable.Cell>
          <TouchableOpacity style={styles.btnexclu}>
          <Text style={styles.textoexclu}>Apagar</Text>
        </TouchableOpacity>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>UBS JARDIM MAIA</DataTable.Cell>
          <DataTable.Cell>02/01/2021</DataTable.Cell>
          <TouchableOpacity style={styles.btnexclu}>
          <Text style={styles.textoexclu}>Apagar</Text>
        </TouchableOpacity>
        </DataTable.Row>
       
      </DataTable>
    </View>
  );
};

export default Notificacao;
