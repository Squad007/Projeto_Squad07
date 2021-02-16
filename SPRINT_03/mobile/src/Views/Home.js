import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { Button, Card, Title } from "react-native-paper";

const styles = StyleSheet.create({

  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 50,
   
  },
  pag: {
    textAlign: 'center',
    
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
const Home = () => {
  return (
    <View style={styles.pag}>
      <View>
        <Text style={styles.titulo}>Faltou medicamento na Unidade básica de saude (UBS)?</Text>
      </View>
     

      <Card style={styles.card}>
        <Card.Content>
          <Title>ULTIMAS NOTIFICAÇÕES</Title>
        </Card.Content>
        <Text>
          Veja as últimas notificações. O acesso à informação é um dos dos
          direitos fundamentais garantido na nossa Constituição.
        </Text>
        <Card.Actions>
          <Button>Acessar</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Title>REGISTRE SUA NOTIFICAÇÃO</Title>
        </Card.Content>
        <Text>
          Notifique da falta de algum dos medicamento que deveria ser fornecido
          pelo Sistema Único de Saúde.
        </Text>
        <Card.Actions>
          <Button>Acessar</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Title>SOBRE NÓS</Title>
        </Card.Content>
        <Text>
          Somos o Squad 07 (SP1) da Recode Pro 2020. Estamos trabalhando para
          desenvolver ferramentas que ajude a comunidade.
        </Text>
        <Card.Actions>
          <Button>Acessar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Home;
