import React from "react";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";


const styles = StyleSheet.create({

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
  btnedit:{
    backgroundColor: "#0000FF",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 40,
    marginRight: 40,
    padding: 10
  
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 40,
    marginRight: 40,
    padding: 10
   
  },
  texto: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
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
const Ubs = () => {
  return (
    <View >
      <Text style={styles.texto}>Bem vindo ao sistema SOS, NAY LOPES! - (NL@ITAU.COM)</Text>
    <Text style={styles.titulo}>UBS's</Text>
    <TouchableOpacity style={styles.btn}>
          <Text style={styles.texto}>CADASTRAR NOVA UBS</Text>
        </TouchableOpacity>
    <DataTable>
      <DataTable.Header >
        <DataTable.Title >ID</DataTable.Title>
        <DataTable.Title>NOME</DataTable.Title>
        <DataTable.Title>DISTRITO/ZONA</DataTable.Title>
        <DataTable.Title>Nº_NOTIFICAÇÕES</DataTable.Title>
        <DataTable.Title>Ações</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
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
      <DataTable.Cell>2</DataTable.Cell>
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
  </View>
  );
};

export default Ubs;
