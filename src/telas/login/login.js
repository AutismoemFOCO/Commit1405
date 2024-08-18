import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, Modal, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9',
    azulEscuro: '#073F62'
}

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [fonteLoaded] = useFonts({ Inder_400Regular });
    const navegacao = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navegacao.navigate('home');
            }
        });

        return () => unsubscribe(); // Limpeza do listener
    }, [navegacao]);

    if (!fonteLoaded) {
        return null;
    }

    async function handleLogin() {
        setErrorMessage('');
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            console.log("Usuário autenticado com sucesso!");
            navegacao.navigate('home');
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setErrorMessage("O e-mail fornecido é inválido. Verifique e tente novamente.");
                    break;
                case 'auth/user-not-found':
                    setErrorMessage("Não há nenhum usuário correspondente a esse e-mail.");
                    break;
                case 'auth/wrong-password':
                    setErrorMessage("Senha incorreta. Verifique a senha e tente novamente.");
                    break;
                default:
                    setErrorMessage("Ocorreu um erro ao fazer login. Tente novamente.");
                    break;
            }
            console.error("Erro ao fazer login!", error);
        } finally {
            setLoading(false);
        }
    }

    function novoUsuario() {
        navegacao.navigate('cadastro');
    }

    function homeConv() {
        navegacao.navigate('homeconv');
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />

            <Image source={require('../../img/cantoTop.png')} style={styles.logoTop} />

            <TouchableOpacity style={styles.convidado} onPress={homeConv}>
                <Text style={styles.titleConv}>Entrar como convidado</Text>
            </TouchableOpacity>

            <Image source={require('../../img/logo.png')} style={styles.logo} />

            <View style={styles.fundo}>
                <View style={styles.contImput}>
                    <Icon name="account" size={26} color={'#61A0FF'} style={styles.icon} />

                    <Text style={styles.title}>E-mail:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Digite seu e-mail...'
                        autoCorrect={false}
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Icon name="key" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 130
                    }} />
                    <Text style={styles.title}>Senha:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Digite sua senha...'
                        secureTextEntry={hidePass}
                        autoCorrect={false}
                        onChangeText={setSenha}
                    />

                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        <Icon name={hidePass ? "eye" : "eye-off"} size={26} color={'grey'} style={styles.eyeIcon} />
                    </TouchableOpacity>

                    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                <Text style={styles.btnText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={novoUsuario}>
                <View style={styles.novaConta}>
                    <Text style={styles.naoconta}>Não tem uma conta?
                        <Text style={styles.cadastre}> CADASTRE-SE</Text></Text>
                </View>
            </TouchableOpacity>

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.azulPadrao,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundo: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 13,
        height: 254,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8ecae6',
        padding: 20
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(29,174,255,0.2)',
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 60,
        marginBottom: 10,
    },
    btn: {
        width: 360,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        margin: 20
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'Inder_400Regular'
    },
    title: {
        fontFamily: 'Inder_400Regular',
        fontSize: 24,
        textAlign: 'left'
    },
    convidado: {
        width: 140,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        right: 30,
        bottom: 100,
    },
    titleConv: {
        textDecorationLine: 'underline',
        fontFamily: 'Inder_400Regular',
        fontSize: 10,
        color: '#fff',
    },
    naoconta: {
        fontFamily: 'Inder_400Regular',
        color: '#fff',
        width: 240
    },
    cadastre: {
        color: color.azulEscuro,
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 9,
        top: -57,
        width: 50,
        height: 44,
        padding: 10,
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 40
    },
    logoTop: {
        width: 85,
        height: 85,
        top: 29,
        left: 0,
        position: 'absolute'
    },
    logo: {
        top: -30,
        width: 300,
        height: 118
    },
    novaConta: {
        top: 100
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
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        marginTop: 10,
        fontSize: 18,
        color: '#000',
    },
});
