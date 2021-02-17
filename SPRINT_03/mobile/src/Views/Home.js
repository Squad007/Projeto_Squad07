import React from "react";
import { Text, ScrollView, View,StyleSheet,TouchableOpacity, Image,Platform } from "react-native";
import { Card, Title } from "react-native-paper";

const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
   
  },
  tinyLogo: {
    width:100,
    height:50,
    
    
   
  },
  tinyBack: {
   backgroundColor:'#00b9b3',
   padding:10,
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between'
   
   
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center', 
    padding: 20,
    fontWeight: 'bold'
   
   
  },
  tituloCard: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  

  card: {
   backgroundColor: '#00b9b3',
   marginBottom: 15,
   marginRight:10,
   marginLeft:10

  },
  btn: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 5,
    borderRadius: 4,
    width: '100%',
  
  },
  btnfalta: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 8,
    borderRadius: 4,
    width: '80%',
    marginBottom: 20,
    marginLeft:40
    
  },
  btnMenu: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    width: '50%',
    marginBottom: 20,
    
  },
  texto: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    fontWeight: 'bold'
  },
  textoCard: {
    padding: 15,
    color: '#FFF',
    fontWeight: 'bold'
  },
  rodape: {
    textAlign: 'center',
    marginTop: 'auto'
  }

});


const Home = ({navigation}) => {
  function notifique() {
    navigation.navigate("Notifique");
  }
  return (
    <ScrollView style={styles.caixa} >
      <View >
        <View style={styles.tinyBack}>
            <TouchableOpacity style={styles.btnMenu} >
          <Text style={styles.texto}>MENU</Text>
        </TouchableOpacity>
        <Image  style={styles.tinyLogo}
          source={require("../../assets/logo.png")}/>
        
          </View>
        <Text style={styles.titulo}>Faltou medicamento na Unidade básica de saude (UBS)?</Text>
        <TouchableOpacity style={styles.btnfalta} onPress={notifique} >
          <Text style={styles.texto}>NOTIFIQUE A FALTA</Text>
        </TouchableOpacity>
      </View>
     
     
      <Card style={styles.card}>
        <Card.Content >
          <Title style={styles.tituloCard}>ULTIMAS NOTIFICAÇÕES</Title>
        </Card.Content>
        <Text style={styles.textoCard}>
          Veja as últimas notificações. O acesso à informação é um dos dos
          direitos fundamentais garantido na nossa Constituição.
        </Text>
        <Card.Actions>
        <TouchableOpacity style={styles.btn} >
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
        <TouchableOpacity style={styles.btn}>
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
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.texto}>Acessar</Text>
        </TouchableOpacity>
        </Card.Actions>
      </Card>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </ScrollView>
    
    
  );
};

export default Home;
