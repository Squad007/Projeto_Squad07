import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";

const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 50,
    
  },
  inputs: {
    width: "100%",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 12,
    borderRadius: 8,
  },

  btnCad: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    width: "40%",
    
  },
  btnLim: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    width: "50%",
    
  },
  btns:{
    display: "flex",
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: "center",
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
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 10
  },
  area: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  }, 
  ims: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center",
  }
});

const Notificacao = () => {
  return (
    
    <View style={styles.caixa}>
     
       
      <View style={styles.ims}>
      <View >
      <Text style={styles.titulo}>ADM'S</Text>

        <Text style={styles.label}>Atuais ADM's do sistema SOS</Text>
        
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/eliana.jpg")}
        />
        <Text>Eliana Souza</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/cris.jpg")}
        />
        <Text>Cristiano Santana</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/mit.jpg")}
        />
        <Text>Mitsuhiko Takushi</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/nay.jpg")}
        />
        <Text>Nayara Suelen</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/raquel.jpg")}
        />
        <Text>Raquel Mendonça</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/roger.jpg")}
        />
        <Text>Willi Roger</Text>
        </View>
        <View >
      <Text style={styles.titulo}>CADASTRAR</Text>

      <Text style={styles.label}>Data de quando faltou o remedio</Text>
      <TextInput
        placeholder="Digite o nome"
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Digite um nome de usuário"
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Digite o e-mail"
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="URL do avatar(opcional)"
        style={styles.input}
        secureTextEntry={true}
      />

      <TextInput
        placeholder="Digite uma senha"
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirme a senha"
        style={styles.input}
        secureTextEntry={true}
      />
      <View style={styles.btns}>
    
        <TouchableOpacity style={styles.btnCad}>
          <Text style={styles.texto}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLim}>
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      <Text style={{ marginBottom: "auto", textAlign: "center" }}>
        © Squad 007 Recode Pro 2020 - 2021
      </Text>
    </View>
  );
};

export default Notificacao;
