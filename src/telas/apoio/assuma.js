import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder'


import Carrossel from '../../components/carrossel/carrossel';

import CarrosselImg from '../../components/carrossel/carrosselImg';


const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Assuma() {
    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });
    if (!fonteLoaded) {
        return null;
    }



    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                <Image source={require('../../img/menu.png')}
                    style={{
                        top: 0,
                        width: '100%',
                        height: 109
                    }} />



                <Image source={require('../../img/assuma/assuma.jpg')}
                    style={{
                        width: 180,
                        height: 160,
                        marginTop: 20,
                        alignSelf: 'center'
                    }} />


                <View
                    style={{
                        borderWidth: 3,
                        borderColor: color.azulPadrao,
                        backgroundColor: color.azulPadrao,
                        borderRadius: 10,
                        width: 200,
                        marginTop: 10,
                        marginBottom: 10,
                        alignSelf: 'center'

                    }}></View>

                <CarrosselImg
                    imagem1={require('../../img/assuma/imagem2.jpg')}
                    imagem2={require('../../img/assuma/imagem1.jpg')}
                    imagem3={require('../../img/assuma/imagem3.jpg')} />

                <View style={styles.card}>
                    <View>
                        <Text style={styles.ttlGP}> Sobre o ASSUMA </Text>
                        <Text style={styles.mainTXGP}>
                            A ASSUMA tem como propósito apoiar as pessoas com Transtorno do
                            Espectro Autista – TEA e seus familiares, a buscarem seus direitos
                            para melhor qualidade de vida, bem como, proporcionar momentos de lazer
                            e integração junto a sociedade, disseminando informações e quebrando barreiras
                            sobre o preconceito, em prol da sua inclusão, bem-estar, desenvolvimento, saúde
                            e educação!</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Fonte: </Text>
                            <Text style={styles.infos}>@supermaesbebedouro</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.card}>
                    <View style={{ width: 250 }}>
                        <Text style={{
                            fontSize: 22,
                            marginBottom: 10,
                            color: color.azulPadrao,
                            fontWeight: 700
                        }}>Localização:</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Estado: </Text>
                            <Text style={styles.infos}>São Paulo</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Cidade: </Text>
                            <Text style={styles.infos}>Bebedouro</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>CEP: </Text>
                            <Text style={styles.infos}>14.711-347</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: 300 }}>
                            <Text style={styles.Titleinfo}>Rua: </Text>
                            <Text style={styles.infos}>Rua Alvaro de Oliveira, 2486 - Residencial Antonia Santaella</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View >
                        <Text style={{
                            fontSize: 22,
                            marginBottom: 10,
                            color: color.azulPadrao,
                            fontWeight: 700
                        }}>Contato:</Text>


                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>E-mail: </Text>
                            <Text style={styles.infos}>supermaes2019@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Instagram: </Text>
                            <Text style={styles.infos}>@supermaesbebedouro</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.infos}>
                                <Text style={styles.Titleinfo}>Facebook: </Text>
                                Assuma - Associação das Super Mães de Autistas </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 30 }}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },



    card: {
        borderWidth: 2,
        padding: 20,
        width: 360,
        alignSelf: 'center',
        borderColor: color.azulPadrao,
        borderRadius: 15,
        marginTop: 20,

    },

    Titleinfo: {
        color: color.azulPadrao
    },

    Titleinfo: {
        color: color.azulPadrao,
        fontSize: 16
    },

    ttlGP: {
        fontSize: 20,
        width: 200,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: color.azulClaro,
        lineHeight: 30
    },

    mainTXGP: {
        lineHeight: 30,
        textAlign: 'center',
        alignSelf: 'center',
        width: 330,
        marginTop: 20,
        fontSize: 16,
        marginBottom: 20,
    },




})
