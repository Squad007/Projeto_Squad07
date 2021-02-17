import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,Image, Alert
} from "react-native";



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
   padding:5,
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between'
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding:5
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
    width: '50%',
    marginBottom: 20,
    
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
  label:{
    marginTop:20,
    fontWeight: 'bold'
  },
  rodape: {
    textAlign: 'center',
    marginTop: 'auto'
  }
});

const Notifique = () => {
  function notifique() {
    Alert.alert("Notificação enviada com Sucesso!!");
}
  
  
  return (
    <View style={styles.caixa}>
        <View style={styles.tinyBack}>
            <TouchableOpacity style={styles.btnMenu}>
          <Text style={styles.texto}>MENU</Text>
        </TouchableOpacity>
        <Image  style={styles.tinyLogo}
          source={require("../../assets/logo.png")}/>
        
          </View>
       <View style={styles.inputs}>
      <Text style={styles.titulo}>Cadastrar Notificação</Text>
      <Text style={styles.label}>Escolha a UBS</Text>
      <TextInput
          placeholder="Digite a UBS"
          style={styles.input}
          secureTextEntry={true}
        />
        
        <Text style={styles.label}>Data de quando faltou o remedio</Text>
        <TextInput
          placeholder="Digite a data"
          style={styles.input}
          secureTextEntry={true}
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
