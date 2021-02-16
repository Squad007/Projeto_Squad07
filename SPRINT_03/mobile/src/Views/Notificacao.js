import React from "react";
import { DataTable } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 50,
  },
});
const Notificacao = () => {
  return (
    <View>
      <Text style={styles.titulo}>Notificações recentes</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>DATA DA FALTA</DataTable.Title>
          <DataTable.Title>UBS</DataTable.Title>
          <DataTable.Title>MEDICAMENTO</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>10/10/2020</DataTable.Cell>
          <DataTable.Cell>AMA/UBS INTEGRADA JARDIM HELENA</DataTable.Cell>
          <DataTable.Cell>
            AMITRIPTILINA CLORIDRATO 25 MG COMPRIMIDO
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default Notificacao;
