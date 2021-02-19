import React from "react";
import { DataTable } from "react-native-paper";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  titulo: {
    color: "#FF0000",
    fontSize: 32,
    marginTop: 50,
    padding:20,
    fontWeight: '700',
    textAlign: "center"
  },
  header: {
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 4,
    padding: 4,
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 12,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: '20%',
    padding: 10,
    opacity: 0.5,
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
    marginTop:50,
    fontWeight: 'bold'
  },
  cadas: {
    fontSize: 18,
    color: "black",
    padding: 18,
    fontWeight: "bold",
  },
});
const Notificacao = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header} >
          <Text style={styles.texto} onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-fold" size={30} color="black"  />  Bem vindo ao sistema SOS!
          </Text>
      </View>
      <Text style={styles.titulo}>Notificações <AntDesign name="exclamationcircleo" size={30} color="red" /></Text>
      <Text style={styles.cadas}>Notificações presentes no sistema:</Text>
      <DataTable style={{ padding: 30 }}>
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
      <Text style={{ marginBottom: "auto", textAlign: "center" }}>
        © Squad 007 Recode Pro 2020 - 2021
      </Text>
    </View>
    
  );
};

export default Notificacao;
