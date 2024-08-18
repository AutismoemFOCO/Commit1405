// Formulario.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, Modal } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { useNavigation } from '@react-navigation/native';

const color = {
  azulPadrao: '#81B1FA',
  azulClaro: '#96C0FF',
  azulCaneta: '#2C78E9'
};

export default function Form() {


  

  const [respostas, setRespostas] = useState(Array(23).fill(null));
  const [modalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [resultadoVisible, setResultadoVisible] = useState(false);
  const [total, setTotal] = useState(0);

  const navegacao = useNavigation()

  function formulario() {
    navegacao.navigate('formulario')
  }

 

  const perguntas = [
    "1. GOSTA DE BRINCAR AO COLO FAZENDO DE “CAVALINHO”, ETC.?",
    "2. GOSTA DE SUBIR OBJETOS, COMO POR EXEMPLO, CADEIRAS, MESAS?",
    "3. GOSTA DE JOGAR ÀS ESCONDIDAS?",
    "4. BRINCA AO FAZ-DE-CONTA, POR EXEMPLO, FALAR AO TELEFONE OU DAR DE COMER A UMA BONECA, ETC.?",
    "5. APONTA COM O INDICADOR PARA PEDIR ALGUMA COISA?",
    "6. BRINCA APROPRIADAMENTE COM BRINQUEDOS (CARROS OU LEGOS) SEM LEVÁ-LOS À BOCA, ABANAR OU DEITÁ-LOS AO CHÃO?",
    "7. A CRIANÇA MANTÉM CONTACTO VISUAL POR MAIS DE UM OU DOIS SEGUNDOS?",
    "8. É MUITO SENSÍVEL AOS RUÍDOS (EX. TAPA OS OUVIDOS)?",
    "9. SORRI COMO RESPOSTA ÀS SUAS EXPRESSÕES FACIAIS OU AO SEU SORRISO?",
    "10. JÁ ANDA?",
    "11. OLHA PARA AS COISAS PARA AS QUAIS O ADULTO ESTÁ A OLHAR?",
    "12. FAZ MOVIMENTOS ESTRANHOS COM AS MÃOS/DEDOS PRÓXIMO DA CARA?",
    "13. TENTA CHAMAR A SUA ATENÇÃO PARA O QUE ESTÁ A FAZER?",
    "14. ALGUMA VEZ SE PREOCUPOU QUANTO À SUA AUDIÇÃO?",
    "15. COMPREENDE O QUE AS PESSOAS LHE DIZEM?",
    "16. POR VEZES FICA A OLHAR PARA O VAZIO OU DEAMBULA AO ACASO PELOS ESPAÇOS?",
    "17. PROCURA A SUA REACÇÃO FACIAL QUANDO SE VÊ CONFRONTADA COM SITUAÇÕES DESCONHECIDAS?",
    "18. INTERESSA-SE PELAS OUTRAS CRIANÇAS?",
    "19. APONTA COM O INDICADOR PARA MOSTRAR INTERESSE EM ALGUMA COISA?",
    "20. ALGUMA VEZ LHE TROUXE OBJECTOS (BRINQUEDOS) PARA LHE MOSTRAR ALGUMA COISA?",
    "21. IMITA O ADULTO (EX. FAZ UMA CARETA E ELA IMITA)?",
    "22. RESPONDE/OLHA QUANDO O(A) CHAMAM PELO NOME?",
    "23. SE APONTAR PARA UM BRINQUEDO DO OUTRO LADO DA SALA, A CRIANÇA ACOMPANHA COM O OLHAR?",
  ];

  const descricoes = [
    "Gosta de fazer cavalinho ou qualquer brincadeira no colo e que tenha movimentos?",
    "Sobre em tudo? Como sofá, cadeira, escada, mesa ou até mesmo em caixas?",
    "Gosta de brincar de esconde esconde?",
    "Brinca de faz de conta? Usa objetos para brincar? Inventa situações na brincadeira?",
    "Aponta com o dedo indicador quando quer ou precisa de alguma coisa, na direção do que ele quer?",
    "Brinca com crianças da mesma idade, com os brinquedos de acordo com o objetivo que foi criado? Ex: Brincar com o carrinho de carrinho.",
    "Ele olha nos olhos das pessoas por mais de 2 segundos? Não vale se você se enfiar na frente dele.",
    "Ele tapa os ouvidos para tentar diminuir algum som no ambiente que está incomodando?",
    "Quando algum sorri para ele, ele demonstra alegria e retribui o sorriso?",
    "Ele já anda adequadamente? Sem precisar dar as mãos?",
    "Quando algum adulto olha para algum lugar, ele acompanha o olhar desse adulto?",
    "Mexe as mãos ou os dedos perto dos olhos de uma forma diferente?",
    "Ele fica te chamando para que você veja o que ele está fazendo? Ou não se importa se você está por perto enquanto ele brinca?",
    "Você alguma vez já suspeitou se seu filho realmente estava te ouvindo ou se tinha algum grau de surdez?",
    "Quando as pessoas falam com ele, ele entende o que estão falando?",
    "Ele fica olhando para o 'nada' ou fica andando sem sentido, de um lado para o outro?",
    "Quando ele está em alguma situação que não entende, ele olha para você para ver sua reação? Ex: quando alguem oferece alguma coisa, ele olha para você para ver se pode aceitar?",
    "Gosta de estar e procura outras crianças, talvez para brincar?",
    "Aponta quando quer mostrar alguma coisa com o dedo indicador quando algo o interessa? Sem o sentido de pedir, mas para mostrar.",
    "Já te levou brinquedos para simplismente te mostrar o quanto aquilo para ele é legal ou interessante?",
    "Quando alguem faz uma careta para ele, ele o imita?",
    "Quando alguem o chama pelo nome, ele atende, olha na direção de quem o chamou?",
    "Ele olha na direção de um brinquedo que você apontou? Não vale dizer nada, só apontar",
  ];

  const gabarito = [
    false, false, false, false, false, false, false,
    true, false, false, false, true, false, true, false, true,
    false, false, false, false, false, false, false
  ];

  const handleResposta = (index, valor) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = valor;
    setRespostas(novasRespostas);
  };

  const calcularResultado = () => {
    let acertos = 0;

    respostas.forEach((resposta, index) => {
      if (resposta === gabarito[index]) {
        acertos++;
      }
    });

    const total = (acertos / perguntas.length) * 100;
    setTotal(total);
    setResultadoVisible(true);
  };

  const todasRespondidas = respostas.every(resposta => resposta !== null);

  const mostrarDescricao = (index) => {
    setDescricao(descricoes[index]);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Image source={require('../../img/menu.png')} style={styles.menuImage} />

      <View style={styles.container}>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              fontFamily: 'Inder_400Regular'
            }}>TESTE
            <Text style={{
              fontWeight: '300'
            }}>  ESCALA M-CHAT</Text></Text>
        </View>

        <View style={{
          width: 350,
          borderWidth: 2,
          borderColor: color.azulClaro,
          borderRadius: 10,
          alignSelf: 'center',
          padding: 15,
          margin: 10,
        }}>

          <Text
            style={{
              fontSize: 15,
              color: '#686868',
              marginBottom: 15
            }}>
            Aspectos Observados
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: '#686868'
            }}>
            Por favor, preencha este questionário sobre o comportamento usual da criança. Responda a todas as questões. Se o
            comportamento descrito for raro (ex. foi observado uma ou duas vezes), responda como se a criança não o apresente.
          </Text>
        </View>

        {perguntas.map((pergunta, index) => (
          <View key={index} style={styles.pergunta}>
            <View style={styles.perguntaContainer}>
              <Text style={{ fontSize: 17, flex: 1 }}>{pergunta}</Text>
              <TouchableOpacity onPress={() => mostrarDescricao(index)}>
                <Icon name="info-circle" size={24} color={color.azulCaneta} style={styles.icone} />
              </TouchableOpacity>
            </View>
            <RadioButton.Group
              onValueChange={valor => handleResposta(index, valor === 'sim')}
              value={respostas[index] === true ? 'sim' : (respostas[index] === false ? 'nao' : '')}
            >
              <View style={styles.radioContainer}>
                <RadioButton value="sim" color='#81B1FA' />
                <Text>SIM</Text>
              </View>
              <View style={styles.radioContainer}>
                <RadioButton value="nao" color='#81B1FA' />
                <Text>NÃO</Text>
              </View>
            </RadioButton.Group>
          </View>
        ))}

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={formulario}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, !todasRespondidas && styles.botaoDesabilitado]}
            onPress={todasRespondidas ? calcularResultado : null}
            disabled={!todasRespondidas}
          >
            <Text style={styles.textoBotao}>CALCULAR</Text>
          </TouchableOpacity>


        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainerDesc}>
          <View style={styles.modalContentDesc}>
            <Text style={{
              fontSize: 20,
              marginBottom: 10,
              textAlign: 'center',
              fontWeight: '600',
              color: 'black'
            }}>
              Descrição
            </Text>
            <Text style={styles.modalDescricao}>{descricao}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonDesc}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={resultadoVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {total < 40 ? (
              <View>

                <Text style={styles.modalTexto}>
                  RESULTADO
                </Text>

                <Text style={{ fontSize: 18, marginBottom: 30, textAlign: 'center', fontWeight: '500' }}>{total.toFixed(2)}% das respostas compatíveis.</Text>

                <Text style={{ fontSize: 18, marginBottom: 50, textAlign: 'center' }}>
                  Provavelmente não há uma chance de desenvolvimento de TEA, uma consulta com um especialista poderá aprofundar a análise da criança.
                </Text>

                <Text style={styles.modalTexto}>
                  IMPORTANTE
                </Text>

                <Text style={{ fontSize: 18, marginBottom: 50, textAlign: 'center' }}>
                  Esse teste deve ser usado para triagem em crianças de até 24 meses. O resultado não pode ser considerado um diagnóstico.
                </Text>

                <Text style={{ fontSize: 18, marginBottom: 50, textAlign: 'center' }}>
                  Somente um especialista, devidamente habilitado, pode fazer uma avaliação completa, fechar diagnósticos e criar um plano individual de intervenção de cada paciente.
                </Text>
              </View>
            ) : (
              <View>

                <Text style={styles.modalTexto}>
                  RESULTADO
                </Text>

                <Text style={{ fontSize: 18, marginBottom: 30, textAlign: 'center', fontWeight: '500' }}>{total.toFixed(2)}% das respostas compatíveis.</Text>

                <Text style={{ fontSize: 18, marginBottom: 50, textAlign: 'center' }}>
                  Há uma chance de desenvolvimento de TEA, uma consulta com um especialista poderá aprofundar a análise da criança.
                </Text>

                <Text style={styles.modalTexto}>
                  IMPORTANTE
                </Text>

                <Text style={{ fontSize: 18, marginBottom: 50, textAlign: 'center' }}>
                  Esse teste deve ser usado para triagem em crianças de até 24 meses. O resultado não pode ser considerado um diagnóstico.
                </Text>

                <Text style={{ fontSize: 18, marginBottom: 50, textAlign: 'center' }}>
                  Somente um especialista, devidamente habilitado, pode fazer uma avaliação completa, fechar diagnósticos e criar um plano individual de intervenção de cada paciente.
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.modalBotao}
              onPress={() => setResultadoVisible(false)}
            >
              <Text style={styles.modalBotaoTexto}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: '100%',
    backgroundColor: 'white'
  },
  menuImage: {
    top: 0,
    width: '100%',
    height: 109
  },
  pergunta: {
    marginVertical: 8,
    width: 350,
    borderWidth: 2,
    borderColor: color.azulClaro,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 15,
  },
  perguntaContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  icone: {
    marginTop: -8, // Ajuste a altura do ícone
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  botao: {
    backgroundColor: color.azulPadrao,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  botaoDesabilitado: {
    backgroundColor: '#A0A0A0',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  botaoVoltar: {
    borderWidth: 2,
    borderColor: '#c4342d',
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  textoBotaoVoltar: {
    color: '#c4342d',
    fontSize: 18,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  modalContent: {
    width: 370,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.azulPadrao
  },
  modalTexto: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: color.azulCaneta
  },
  modalBotao: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  modalBotaoTexto: {
    color: 'white',
    fontSize: 16,
  },

  modalContainerDesc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentDesc: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    alignItems: 'center',
  },
  modalDescricao: {
    fontSize: 18,
    marginBottom: 16,
  },
  modalCloseButtonDesc: {
    fontSize: 18,
    color: '#2C78E9',
    fontWeight: 'bold',

    alignSelf: 'center'
  },
});
