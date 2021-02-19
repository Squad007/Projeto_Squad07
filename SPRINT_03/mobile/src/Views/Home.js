import React from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
import { Card, Title } from "react-native-paper";

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
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 30,
    marginTop: 10,
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
  },
  tituloCard: {
    color: "#FFF",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#00b9b3",
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 15,
  },
  btn: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 5,
    borderRadius: 4,
    width: "100%",
  },
  btnfalta: {
    backgroundColor: "#6f42c1",
    marginTop: 15,
    padding: 8,
    borderRadius: 4,
    width: "80%",
    marginLeft: Platform.OS === "web" ? "20vh" : "10%",
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
    fontSize: 17,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  textoCard: {
    padding: 15,
    color: "#FFF",
    fontWeight: "bold",
  },
  rodape: {
    textAlign: "center",
    marginTop: "auto",
  },
  // icons: {
  //   paddingRight: 10,
  // },
});

const Home = ({ navigation }) => {

  function notifique() {
    navigation.navigate("Notifique");
  }
  function notificacao() {
    navigation.navigate("Notificações");
  }
  function sobre() {
    navigation.navigate("Sobre");
  }

  return (
    <ScrollView style={styles.caixa}>
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
        <Text style={styles.titulo}>
          Faltou medicamento na Unidade básica de saude (UBS)?
        </Text>
        <View style={styles.btnfalta}>
          <TouchableOpacity onPress={notifique}>
            <Text style={styles.texto}>
              NOTIFIQUE A FALTA <AntDesign name="exclamationcircleo" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.tituloCard}>ULTIMAS NOTIFICAÇÕES</Title>
        </Card.Content>
        <Text style={styles.textoCard}>
          Veja as últimas notificações. O acesso à informação é um dos dos
          direitos fundamentais garantido na nossa Constituição.
        </Text>
        <Card.Actions>
          <TouchableOpacity style={styles.btn} onPress={notificacao}>
            <Text style={styles.texto}>Acessar</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.tituloCard}>REGISTRE SUA NOTIFICAÇÃO</Title>
        </Card.Content>
        <Text style={styles.textoCard}>
          Notifique da falta de algum dos medicamento que deveria ser fornecido
          pelo Sistema Único de Saúde.
        </Text>
        <Card.Actions>
          <TouchableOpacity style={styles.btn} onPress={notifique}>
            <Text style={styles.texto}>Acessar</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.tituloCard}>SOBRE NÓS</Title>
        </Card.Content>
        <Text style={styles.textoCard}>
          Somos o Squad 07 (SP1) da Recode Pro 2020. Estamos trabalhando para
          desenvolver ferramentas que ajude a comunidade.
        </Text>
        <Card.Actions>
          <TouchableOpacity style={styles.btn} onPress={sobre}>
            <Text style={styles.texto}>Acessar</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </ScrollView>
  );
};

export default Home;
