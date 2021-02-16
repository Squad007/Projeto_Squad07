import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 50,
  },
});

const Sobre = () => {
  return (
    <ScrollView>
      <Text style={styles.titulo}>Nossa História</Text>

      <Text>
        {" "}
        A ideia para o site surgiu a partir de um problema: a falta de
        medicamentos no SUS. Uma das formas de intervir, e dar voz às pessoas, é
        ajudar na construção de meios que auxiliem a participação da comunidade
        no controle, gestão e fiscalização dos recursos públicos de saúde. O
        site nasceu com essa proposta, ser uma plataforma de publicização e
        monitoramento do desabastecimento.
      </Text>
      <Text style={styles.titulo}>Nossa Visão</Text>
      <Text>
        Prestar com excelência o serviço de notificação de falta de medicamentos
        para que as dores dos cidadãos sejam ouvidas e minimizadas.{" "}
      </Text>
      <Text style={styles.titulo}>Nossa Missão</Text>

      <Text>
        Oferecer um meio de notificações para população, atigindo principalmente
        o público mais vulnerável, que necessita dos medicamentos
        disponibilizados pelo Sistema Único de Saúde (SUS).
      </Text>
      <Text style={styles.titulo}>Nossos Valores</Text>

      <Text>
        Despertar o controle social pela população usuária do Sistema Único de
        Saúde (SUS) e contribuir para a melhoria da disponibilidade de
        medicamentos.
      </Text>

      <Text style={styles.titulo}>
        Nosso Time - Squad 07 (SP1) Recode Pro 2020
      </Text>

      <View>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/eliana.jpg")}
        />
        <Text>Eliana Souza</Text>
        <Text>
          Formada em Tecnologia em Gestão da Qualidade. Empreendedora, Gosto de
          ler sobre vários assuntos.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/cris.jpg")}
        />
        <Text>Cristiano Santana</Text>
        <Text>
          Desenvolvedor Full Stack apoixonado por tecnologia Estudante Full
          Stack Dev | Eng. Mecânico | Téc. Mecatrônico.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/mit.jpg")}
        />
        <Text>Mitsuhiko Takushi</Text>
        <Text>
          Atualmente desenvolvendo habilidades para uma carreira em Engenharia
          de Software. Full Stack Web na Recode Pro.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/nay.jpg")}
        />
        <Text>Nayara Suelen</Text>
        <Text>
          Uma estudante de 26 anos e apaixonada por tecnologia. Adoro aprender e
          contribuir de todas as formas possíveis.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/raquel.jpg")}
        />
        <Text>Raquel Mendonça</Text>
        <Text>
          Conhecimento e habilidades para execução da estratégia comercial;
          Compromisso com as metas estabelecidas.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/roger.jpg")}
        />
        <Text>Willi Roger</Text>
        <Text>
          Full stack developer, Philosophy Student in University of São Paulo
          Science, Technology, Society, Law and Philosophy.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Sobre;
