import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";

const styles = StyleSheet.create({
  caixa: {
    width: "100%",
    height: "100%",
    
  },

  titulo: {
    color: "#ffc107",
    fontSize: 32,
    marginTop: 50,
  },
  tituTable: {
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#ffc107",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    marginLeft: 50,
    marginRight: 50,
  },
  btnedit: {
    backgroundColor: "#0000FF",
    marginTop: 12,
    opacity: 0.5,
    width:20,
    
    height:10
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 12,
    opacity: 0.5,
    width:20,
    height:10
  },
  texto: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 40,
    fontWeight:'bold'
  },
  textocad:{
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontWeight: 'bold'
   
  },
  textoedit: {
    fontSize: 5,
    color: "white",
    textAlign: "center",
  },
  textoexclu: {
    fontSize: 5,
    color: "white",
    textAlign: "center",
  },
  cadas: {
    fontSize: 18,
    color: "black",
    padding: 30,
    fontWeight: "bold",
  },
});
const Ubs = () => {
  return (
    <View style={styles.caixa}>
      <Text style={styles.texto}>
        Bem vindo ao sistema SOS, NAY LOPES! - (NL@ITAU.COM)
      </Text>
      <Text style={styles.titulo}>UBS's</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textocad}>CADASTRAR NOVA UBS</Text>
      </TouchableOpacity>
      <Text style={styles.cadas}>Atualmente cadastradas:</Text>
      <DataTable style={{ padding: 10 }}>
        <DataTable.Header >
          
          <DataTable.Title>NOME</DataTable.Title>
          <DataTable.Title>ZONA</DataTable.Title>
          <DataTable.Title>Nº_NOT</DataTable.Title>
          
        </DataTable.Header>
        <DataTable.Row>
          
          <DataTable.Cell>AMA/UBS INTEGRADA JARDIM HELENA</DataTable.Cell>
          <DataTable.Cell>SÃO MIGUEL PAULISTA /ZL</DataTable.Cell>
          <DataTable.Cell>1</DataTable.Cell>
          <TouchableOpacity style={styles.btnedit}>
            <Text style={styles.textoedit}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnexclu}>
            <Text style={styles.textoexclu}>Apagar</Text>
          </TouchableOpacity>
        </DataTable.Row>
        <DataTable.Row>
          
          <DataTable.Cell>UBS CIDADE NOVA SÃO MIGUEL</DataTable.Cell>
          <DataTable.Cell>SÃO MIGUEL PAULISTA /ZL</DataTable.Cell>
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

export default Ubs;
