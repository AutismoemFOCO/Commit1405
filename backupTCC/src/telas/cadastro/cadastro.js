import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Inder_400Regular} from '@expo-google-fonts/inder'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 



export default function Cadastro() {



    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repsenha, setRepSenha] = useState('');

    const [hidePass, setHidePass] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);

    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });
    if (!fonteLoaded) {
        return null;
    }

    const cadastro = () => {
        alert('Olá, ' + nome + ' Seja bem-vindo(a)');
        //alert(email);
        //alert(senha);
        //alert(repsenha);
    }

    return (
        <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <Image source={require('../../img/FundoComLogo.png')}
                style={{
                    top: 0,
                    width: '100%',
                    height: 189
                }} />

            <TouchableOpacity style={styles.convidado}>
                <Text style={styles.titleConv}>Entrar como convidado</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 28 }}>Bem-Vindo(a)!</Text>

            <View style={styles.fundo}>
                <View style={styles.contImput}>

                    <Text style={styles.title}>Nome:</Text>

                    <TextInput style={styles.textInput}
                        onChangeText={text => setNome(text)}
                        placeholder='Digite seu nome...'
                    />
                    <Icon name="account" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 40
                    }} />

                    <Text style={styles.title}>E-mail:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={text => setEmail(email)}
                        placeholder='Digite seu e-mail...'
                    />
                    <Icon name="account" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 130
                    }} />

                    <Text style={styles.title}>Senha:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={text => setSenha(senha)}
                        placeholder='Digite sua senha...'
                        secureTextEntry={hidePass} />

                    <Icon name="key" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 222
                    }} />

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


                    <Text style={styles.title}>Repetir Senha:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={text => setRepSenha(repsenha)}
                        placeholder='Repita sua senha...'
                        secureTextEntry={hidePass2} />

                    <Icon name="key" size={26} color={'#61A0FF'} style={{
                        position: 'absolute',
                        left: 10,
                        top: 312
                    }} />

                    <TouchableOpacity onPress={() => setHidePass2(!hidePass2)}>


                        {hidePass2 ?
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

                </View>
            </View>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => cadastro()}>
                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, color: '#fff' }}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.jaconta}>Já tem uma conta? <Text style={styles.conecte}>CONECTE-SE</Text></Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
    },

    fundo: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 13,
        height: 399,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8ecae6',
    },

    textInput: {
        width: 350,
        height: 50,
        backgroundColor: 'rgba(29,174,255,0.2)',
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 60,
        marginBottom: 10,
    },

    btn: {
        width: '85%',
        height: 55,
        backgroundColor: '#8ecae6',
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
        top: -145,
        right: -130,
    },

    titleConv: {
        textDecorationLine: 'underline',
        fontFamily: 'Inder_400Regular',
        fontSize: 10,
        color: '#fff'
    },

    jaconta: {

        fontFamily: 'Inder_400Regular'
    },

    conecte: {
        color: '#8ecae6',
        textDecorationLine: 'underline',
    },

    icon: {
        position: 'absolute',
        left: 10,
        top: 40
    }

}) 