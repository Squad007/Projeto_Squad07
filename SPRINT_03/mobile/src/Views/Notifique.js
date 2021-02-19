import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  StatusBar,
} from "react-native";
import { Entypo } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  tinyLogo: {
    width: 122,
    height: 70,
    justifyContent: 'center'
  },
  tinyBack: {
    backgroundColor: "#00b9b3",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
  },
  inputs: {
    width: "100%",
    padding: 15,
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
  },
  btnMenu: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    width: "30%",
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
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
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
  rodape: {
    textAlign: "center",
    marginTop: "auto",
  },
});

<<<<<<< HEAD
const Notifique = ({navigation}) => {
=======
const Notifique = ({ navigation }) => {
>>>>>>> 43092ee84e032c2fac9e76b4c328827d39bdf5e5
  function notifique() {
    Alert.alert("Notificação enviada com Sucesso!!");
  }


  return (
    <View style={styles.caixa}>
<<<<<<< HEAD
      <View style={styles.tinyBack}>
      <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
            <Text style={styles.texto}><Entypo name="menu" size={24} color="white" /> MENU</Text>
          </TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/logo.png")}
        />
=======
      <StatusBar hidden={false} />
      <View>
        <View style={styles.tinyBack}>
          <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
            <Text style={styles.texto}><Entypo name="menu" size={24} color="white" /> MENU</Text>
          </TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo.png")}
          />
        </View>
>>>>>>> 43092ee84e032c2fac9e76b4c328827d39bdf5e5
      </View>
      <View style={styles.inputs}>
        <Text style={styles.titulo}>Cadastrar Notificação</Text>
        <Text style={styles.label}>Digite o nome da UBS</Text>
        <TextInput
          placeholder="Digite a UBS"
          style={styles.input}
          
        />

        <Text style={styles.label}>Data de quando faltou o remédio</Text>
        <TextInput
          placeholder="Digite a data"
          style={styles.input}
          
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
        <TouchableOpacity style={styles.btn} onPress={notifique}>
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </View>
  );
};

export default Notifique;
