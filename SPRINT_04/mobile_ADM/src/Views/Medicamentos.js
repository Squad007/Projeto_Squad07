import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const styles = StyleSheet.create({
  titulo: {
    color: "#28a745",
    fontSize: 32,
    marginTop: 50,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 4,
    padding: 4,
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
    marginTop: 15,
    opacity: 0.5,
    width:20,
    height:12,
    borderRadius: 2
  },
  btnexclu: {
    backgroundColor: "#FF0000",
    marginTop: 15,
    opacity: 0.5,
    width:20,
    height:12,
    borderRadius: 2

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
    fontSize: 5,
    color: "white",
    textAlign: "center",
  },
  textoexclu: {
    fontSize: 5,
    color: "white",
    textAlign: "center",
    
  },
  titulo: {
    color: "#28a745",
    fontSize: 32,
    marginTop: 50,
    fontWeight: '700',
    textAlign: "center"
  },
});

const Medicamentos = ({ navigation }) => {
  return (
    <View >
      <View style={styles.header} >
          <Text style={styles.texto} onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-fold" size={30} color="black"  />  Bem vindo ao sistema SOS!
          </Text>
      </View>
      <Text style={styles.titulo}>Medicamentos <FontAwesome5 name="pills" size={30} color="green" /></Text>
    <TouchableOpacity style={styles.btn}>
          <Text style={styles.textocad}>NOVO MEDICAMENTO<AntDesign name="totop" size={24} color="black" /></Text>
        </TouchableOpacity>
    <DataTable  style={{ padding: 10 }}>
      <DataTable.Header  >
        <DataTable.Title >ID</DataTable.Title>
        <DataTable.Title>NOME</DataTable.Title>
        <DataTable.Title>Nº_NOTIFICAÇÕES</DataTable.Title>
       
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
      <DataTable.Cell >1106400100600022</DataTable.Cell>
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
