import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  tinyImg: {
    width:80,
    height:80,
    borderRadius:50,
    marginLeft: 136
  },  
  tinyLogo: {
    width: 100,
    height: 50,
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
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  texto: {
    padding: 15,
    color: "#121212",
    textAlign: "justify",
    lineHeight: 25,
  },
  textobtn: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  btnMenu: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    width:150,
    marginBottom: 20,
    
  },
  nome: {
    textAlign: "center",
    fontWeight: "bold",
  },

  rodape: {
    textAlign: "center",
    marginTop: "auto",
  },
});

const Sobre = () => {
  return (
    <ScrollView>
      <View style={styles.tinyBack}>
        <TouchableOpacity style={styles.btnMenu}>
          <Text style={styles.textobtn}>MENU</Text>
        </TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/logo.png")}
        />
      </View>
      <Text style={styles.titulo}>Nossa História</Text>

      <Text style={styles.texto}>
        {"      "}A ideia para o site surgiu a partir de um problema: a falta de
        medicamentos no SUS. Uma das formas de intervir, e dar voz às pessoas, é
        ajudar na construção de meios que auxiliem a participação da comunidade
        no controle, gestão e fiscalização dos recursos públicos de saúde. O
        site nasceu com essa proposta, ser uma plataforma de publicização e
        monitoramento do desabastecimento.
      </Text>
      <Text style={styles.titulo}>Nossa Visão</Text>
      <Text style={styles.texto}>
        {"      "}
        Prestar com excelência o serviço de notificação de falta de medicamentos
        para que as dores dos cidadãos sejam ouvidas e minimizadas.{" "}
      </Text>
      <Text style={styles.titulo}>Nossa Missão</Text>

      <Text style={styles.texto}>
        {"      "}
        Oferecer um meio de notificações para população, atigindo principalmente
        o público mais vulnerável, que necessita dos medicamentos
        disponibilizados pelo Sistema Único de Saúde (SUS).
      </Text>
      <Text style={styles.titulo}>Nossos Valores</Text>

      <Text style={styles.texto}>
        {"      "}
        Despertar o controle social pela população usuária do Sistema Único de
        Saúde (SUS) e contribuir para a melhoria da disponibilidade de
        medicamentos.
      </Text>

      <Text style={styles.titulo}>
        Nosso Time - Squad 07 (SP1) Recode Pro 2020
      </Text>

      <View>
        <Image
          style={styles.tinyImg}
          source={require("../../assets/eliana.jpg")}
        />
        <Text style={styles.nome}>Eliana Souza</Text>
        <Text style={styles.texto}>
          Formada em Tecnologia em Gestão da Qualidade. Empreendedora, Gosto de
          ler sobre vários assuntos.
        </Text>
        <Image
          style={styles.tinyImg}
          source={require("../../assets/cris.jpg")}
        />
        <Text style={styles.nome}>Cristiano Santana</Text>
        <Text style={styles.texto}>
          Desenvolvedor Full Stack apoixonado por tecnologia Estudante Full
          Stack Dev | Eng. Mecânico | Téc. Mecatrônico.
        </Text>
        <Image
          style={styles.tinyImg}
          source={require("../../assets/mit.jpg")}
        />
        <Text style={styles.nome}>Mitsuhiko Takushi</Text>
        <Text style={styles.texto}>
          Atualmente desenvolvendo habilidades para uma carreira em Engenharia
          de Software. Full Stack Web na Recode Pro.
        </Text>
        <Image
          style={styles.tinyImg}
          source={require("../../assets/nay.jpg")}
        />
        <Text style={styles.nome}>Nayara Suelen</Text>
        <Text style={styles.texto}>
          Uma estudante de 26 anos e apaixonada por tecnologia. Adoro aprender e
          contribuir de todas as formas possíveis.
        </Text>
        <Image
          style={styles.tinyImg}
          source={require("../../assets/raquel.jpg")}
        />
        <Text style={styles.nome}>Raquel Mendonça</Text>
        <Text style={styles.texto}>
          Conhecimento e habilidades para execução da estratégia comercial;
          Compromisso com as metas estabelecidas.
        </Text>
        <Image
          style={styles.tinyImg}
          source={require("../../assets/roger.jpg")}
        />
        <Text style={styles.nome}>Willi Roger</Text>
        <Text style={styles.texto}>
          Full stack developer, Philosophy Student in University of São Paulo
          Science, Technology, Society, Law and Philosophy.
        </Text>
      </View>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </ScrollView>
  );
};

export default Sobre;
