import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { DataTable } from "react-native-paper";


const styles = StyleSheet.create({
  titulo: {
    color: "#007bff",
    fontSize: 32,
    marginTop: 50,
    fontWeight: 'bold',
    padding:20
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: '20%',
    padding: 10,
    opacity:0.5
   
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
    fontWeight:'bold',
    marginTop:30
  },
  cadas: {
    fontSize: 18,
    color: "black",
    padding: 30,
    fontWeight: "bold",
  },
});

function FaleConosco() {
  return (
    <View>
       <Text style={styles.texto}>Bem vindo ao sistema SOS, NAY LOPES! - (NL@ITAU.COM)</Text>
      <Text style={styles.titulo}>Mensagens</Text>
      
      <Text style={styles.cadas}>Mensagens recentes:</Text>
      <DataTable style={{ padding: 30 }}>
        <DataTable.Header>
          <DataTable.Title>DATA/HORA</DataTable.Title>
          <DataTable.Title>NOME/MENSAGEM</DataTable.Title>
          <DataTable.Title>E-MAIL(opcional)</DataTable.Title>
          <DataTable.Title>AÇÕES</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>20/01/2020</DataTable.Cell>
          <DataTable.Cell>Cris</DataTable.Cell>
          <DataTable.Cell>cris@itau.com</DataTable.Cell>
          <TouchableOpacity style={styles.btnexclu}>
          <Text style={styles.textoexclu}>Apagar</Text>
        </TouchableOpacity>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>10/02/2021</DataTable.Cell>
          <DataTable.Cell>Eliana</DataTable.Cell>
          <DataTable.Cell></DataTable.Cell>
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
}

export default FaleConosco;
