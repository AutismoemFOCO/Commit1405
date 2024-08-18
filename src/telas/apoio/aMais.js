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

export default function AMais() {
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


                <Image source={require('../../img/aMais/aMais.png')}
                    style={{
                        width: 181,
                        height: 123,
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
                    imagem1={require('../../img/aMais/imagem1.jpg')}
                    imagem2={require('../../img/aMais/imagem2.jpg')}
                    imagem3={require('../../img/aMais/imagem3.jpg')} />

                <View style={styles.card}>
                    <View>
                        <Text style={styles.ttlGP}> Sobre o aMais </Text>
                        <Text style={styles.mainTXGP}>A aMAIS São Roque é um grupo de apoio a pais
                            de pessoas com autismo e pessoas autistas, criada em maio de 2014.
                            O autismo é um transtorno de desenvolvimento que geralmente aparece nos três primeiros anos de
                            vida e compromete as habilidades de comunicação e interação social.
                            O objetivo é levar informação a respeito do autismo a toda a sociedade
                            e compartilhar experiências entre famílias e pessoas afetadas pelo Transtono do Espectro Autista.
                            A aMAIS realiza roda de conversas mensais, palestras de conscientização e
                            anualmente a Caminhada no mês de abril em São Roque.</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Fonte: </Text>
                            <Text style={styles.infos}>amaissaoroque.com.br</Text>
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
                            <Text style={styles.infos}>São Roque</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>CEP: </Text>
                            <Text style={styles.infos}>18130-505</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: 300 }}>
                            <Text style={styles.Titleinfo}>Endereço: </Text>
                            <Text style={styles.infos}>R. Epaminondas de Oliveira 239 Centro</Text>
                        </View>
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
                    }}>Contato:</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>Telefone: </Text>
                        <Text style={styles.infos}>(11)97165-7461 ou (11)99752-5151</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>E-mail: </Text>
                        <Text style={styles.infos}>contato@amaissaoroque.com.br</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>Instagram: </Text>
                        <Text style={styles.infos}>@amais_sr</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>Site: </Text>
                        <Text style={styles.infos}>amaissaoroque.com.br</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 30 }}></View>
        </ScrollView >
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
