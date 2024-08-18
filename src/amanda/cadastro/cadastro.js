import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar, Modal, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../firebase/firebaseConfig';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data_nas, setData_Nas] = useState('');
  const [sexo, setSexo] = useState('');
  const [senha, setSenha] = useState('');
  const [repsenha, setRepSenha] = useState('');
  
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const [fontsLoaded] = useFonts({ Inder_400Regular });

  const [errorMessage, setErrorMessage] = useState('');
  
  const [loading, setLoading] = useState(false);

  const navegacao = useNavigation();

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Ou uma tela de carregamento enquanto as fontes são carregadas
  }

  function autenticarUsuario() {
    navegacao.navigate('login');
  }

  function homeConv() {
    navegacao.navigate('homeconv');
  }

  const handleDateChange = (text, setter) => {
    // Remove tudo que não for número
    const cleaned = text.replace(/\D/g, '');

    let formatted = '';

    // Formatação do dia (2 dígitos)
    if (cleaned.length > 0) {
      formatted = cleaned.slice(0, 2);
    }

    // Formatação do mês (2 dígitos)
    if (cleaned.length >= 3) {
      formatted += '/' + cleaned.slice(2, 4);
    }

    // Formatação do ano (4 dígitos)
    if (cleaned.length >= 5) {
      formatted += '/' + cleaned.slice(4, 8);
    }

    setter(formatted);
  };

  async function registerUser() {
    // Limpa a mensagem de erro anterior
    setErrorMessage('');
    setLoading(true); // Mostrar o modal de carregamento

    // Verifica se as senhas coincidem
    if (senha !== repsenha) {
      setErrorMessage("As senhas não coincidem!");
      setLoading(false); // Esconder o modal de carregamento
      return;
    }

    try {
      // Criando usuário com nome, email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salvar informações no Firebase
      await setDoc(doc(db, "cadastro", user.uid), {
        name_cad: nome,
        email_cad: email,
        telefone: telefone,
        data_nas: data_nas,
        sexo: sexo,
      });

      console.log("Usuário cadastrado com sucesso!");
      // Navegar para a tela de home
      navegacao.navigate('home');
    } catch (error) {
      // Atualizar o estado com a mensagem de erro do Firebase
      switch (error.code) {
        case 'auth/email-already-in-use':
          setErrorMessage("Este e-mail já está em uso. Tente outro e-mail.");
          break;
        case 'auth/invalid-email':
          setErrorMessage("O e-mail fornecido é inválido. Verifique e tente novamente.");
          break;
        case 'auth/weak-password':
          setErrorMessage("A senha é muito fraca. A senha deve ter pelo menos 6 caracteres.");
          break;
        case 'auth/missing-password':
          setErrorMessage("Senha é obrigatória. Por favor, forneça uma senha.");
          break;
        case 'auth/user-not-found':
          setErrorMessage("Não há nenhum usuário correspondente a esse e-mail.");
          break;
        case 'auth/wrong-password':
          setErrorMessage("Senha incorreta. Verifique a senha e tente novamente.");
          break;
        default:
          setErrorMessage("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
          break;
      }
      console.error("Erro ao cadastrar o usuário!", error);
    } finally {
      setLoading(false); // Esconder o modal de carregamento
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Image
        source={require('../../img/FundoComLogo.png')}
        style={styles.image}
      />

      <TouchableOpacity style={styles.convidado} onPress={homeConv}>
        <Text style={styles.titleConv}>Entrar como convidado</Text>
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Bem-Vindo(a)!</Text>

      <View style={styles.fundo}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Nome:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu nome..."
              value={nome}
              onChangeText={text => setNome(text)}
            />
            <Icon
              name="account"
              size={26}
              color={'#61A0FF'}
              style={styles.icon}
            />
          </View>

          <Text style={styles.title}>Data de Nascimento:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={data_nas}
              placeholder="DD/MM/AAAA"
              onChangeText={(text) => handleDateChange(text, setData_Nas)}
              keyboardType="numeric"
            />
            <Icon
              name="calendar"
              size={26}
              color={'#61A0FF'}
              style={styles.icon}
            />
          </View>

          <Text style={styles.title}>Sexo:</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                { backgroundColor: sexo === 'Masculino' ? '#96C0FF' : '#fff' }
              ]}
              onPress={() => setSexo('Masculino')}
            >
              <Text style={styles.genderText}>Masculino</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                { backgroundColor: sexo === 'Feminino' ? '#96C0FF' : '#fff' }
              ]}
              onPress={() => setSexo('Feminino')}
            >
              <Text style={styles.genderText}>Feminino</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>E-mail:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu e-mail..."
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Icon
              name="account"
              size={26}
              color={'#61A0FF'}
              style={styles.icon}
            />
          </View>

          <Text style={styles.title}>Telefone:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu telefone..."
              value={telefone}
              onChangeText={text => setTelefone(text)}
              keyboardType="phone-pad"
            />
            <Icon
              name="phone"
              size={26}
              color={'#61A0FF'}
              style={styles.icon}
            />
          </View>

          <Text style={styles.title}>Senha:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite sua senha..."
              secureTextEntry={hidePass}
              value={senha}
              onChangeText={text => setSenha(text)}
            />
            <Icon
              name="key"
              size={26}
              color={'#61A0FF'}
              style={styles.icon}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setHidePass(!hidePass)}>
              <Icon
                name={hidePass ? 'eye' : 'eye-off'}
                size={26}
                color={'grey'}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Repetir Senha:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Repita sua senha..."
              secureTextEntry={hidePass2}
              value={repsenha}
              onChangeText={text => setRepSenha(text)}
            />
            <Icon
              name="key"
              size={26}
              color={'#61A0FF'}
              style={styles.icon}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setHidePass2(!hidePass2)}>
              <Icon
                name={hidePass2 ? 'eye' : 'eye-off'}
                size={26}
                color={'grey'}
              />
            </TouchableOpacity>
          </View>

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={registerUser}>
        <Text style={styles.btnText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={autenticarUsuario}>
        <Text style={styles.jaconta}>
          Já tem uma conta? <Text style={styles.conecte}>CONECTE-SE</Text>
        </Text>
      </TouchableOpacity>

      {/* Modal de carregamento */}
      <Modal
        transparent={true}
        animationType="none"
        visible={loading}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.modalText}>Carregando...</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 189,
  },
  fundo: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 13,
    width: '95%',
    padding: 20,
    borderWidth: 2,
    borderColor: '#8ecae6',
  },
  inputContainer: {
    width: '100%',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(29,174,255,0.2)',
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 60,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 12,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  btn: {
    width: '85%',
    height: 55,
    backgroundColor: '#8ecae6',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  title: {
    fontFamily: 'Inder_400Regular',
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 5,
  },
  convidado: {
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleConv: {
    textDecorationLine: 'underline',
    fontFamily: 'Inder_400Regular',
    fontSize: 10,
    color: '#fff',
  },
  jaconta: {
    fontFamily: 'Inder_400Regular',
    marginBottom: 20
  },
  conecte: {
    color: '#8ecae6',
    textDecorationLine: 'underline',
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  genderButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: '#61A0FF',
  },
  genderText: {
    fontSize: 18,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});
