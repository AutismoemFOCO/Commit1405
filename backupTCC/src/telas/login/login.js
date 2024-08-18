import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone diretamente do pacote

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9',
    azulEscuro: '#073F62'
}


export default function Login() {



    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleValidation = () => {
        if (validateEmail(email)) {
            alert("Olá, " + email + ". Seja bem-vindo(a) de volta");
        } else {
            Alert.alert("Email inválido!");
        }
    };
    const [hidePass, setHidePass] = useState(true);

    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });
    if (!fonteLoaded) {
        return null;
    }




    return (

        <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />

            <Image source={require('../../img/cantoTop.png')}
                style={{
                    width: 85,
                    height: 85,
                    top: 29,
                    left: 0,
                    position: 'absolute'
                }} />

            <TouchableOpacity style={styles.convidado}>
                <Text style={styles.titleConv}>Entrar como convidado</Text>
            </TouchableOpacity>

            <Image source={require('../../img/logo.png')}
                style={{
                    top: 0,
                    width: 300,
                    height: 118
                }} />

            <View style={styles.fundo}>
                <View style={styles.contImput}>



                    <Icon name="account" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 40
                    }} />

                    <Text style={styles.title}>E-mail:</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Digite seu e-mail...'
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Icon name="key" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 130
                    }} />

                    <Text style={styles.title}>Senha:</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Digite sua senha...'
                        secureTextEntry={hidePass}
                        autoCorrect={false}
                        onChangeText={(text) => setSenha(text)} />


                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>


                        {hidePass ?
                            <Icon name="eye" size={26} color={'grey'}
                                style={{
                                    position: 'absolute',
                                    right: 9,
                                    top: -57,
                                    width: 50,
                                    height: 44,
                                    padding: 10,
                                }} />
                            :
                            <Icon name="eye-off" size={26} color={'grey'}
                                style={{
                                    position: 'absolute',
                                    right: 9,
                                    top: -57,
                                    width: 50,
                                    height: 44,
                                    padding: 10,
                                }} />}
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                                textAlign: 'right',
                                color: color.azulEscuro,
                                fontWeight: 'bold'

                            }}>
                            esqueceu a senha</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#000',
                    fontFamily: 'Inder_400Regular'
                }}
                    onPress={handleValidation}
                >ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{
                    top: 120
                }}>
                    <Text style={styles.naoconta}>Não tem uma conta?
                        <Text style={styles.cadastre}>CADASTRE-SE</Text></Text>
                </View>
            </TouchableOpacity>

            
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
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8ecae6',
    },

    textInput: {
        width: 330,
        height: 50,
        backgroundColor: 'rgba(29,174,255,0.2)',
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 60,
        marginBottom: 10,
    },

    btn: {
        width: '90%',
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        margin: 20
    },

    title: {
        fontFamily: 'Inder_400Regular',
        fontSize: 24,
        textAlign: 'left'
    },

    convidado: {
        bottom: 80,
        right: -130,
    },

    titleConv: {
        textDecorationLine: 'underline',
        fontFamily: 'Inder_400Regular',
        fontSize: 10,
        color: '#fff'
    },

    naoconta: {

        fontFamily: 'Inder_400Regular',
        color: '#fff'
    },

    cadastre: {
        color: color.azulEscuro,
        textDecorationLine: 'underline',
    },

    icon: {
        position: 'absolute',
        left: 10,
        top: 40
    }

}) 