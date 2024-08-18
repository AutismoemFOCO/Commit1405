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

export default function ASA() {
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



                <Image source={require('../../img/asa/asa.jpg')}
                    style={{
                        width: 200,
                        height: 89,
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
                    imagem1={require('../../img/asa/imagem3.png')}
                    imagem2={require('../../img/asa/imagem2.png')}
                    imagem3={require('../../img/asa/imagem1.png')} />

                <View style={styles.card}>
                    <View>
                        <Text style={styles.ttlGP}> Sobre o A.S.A </Text>
                        <Text style={styles.mainTXGP}>
                            No dia 20 de novembro o ASA, Amor, Superação, Autismo criado em 2019, [...]
                            com uma lista enorme de realizações que ajudaram autistas e suas famílias através do treinamento
                            de habilidades sociais, capacitações, treinamento parental, bazares beneficentes, programação de
                            férias e lives com profissionais, sempre com o objetivo de responder aos vários questionamentos dos
                            familiares de autistas. </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Fonte: </Text>
                            <Text style={styles.infos}>tribunapulinia.com.br</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.card}>
                    <View>
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
                            <Text style={styles.infos}>Paulínia</Text>
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
                            <Text style={styles.Titleinfo}>Telefone: </Text>
                            <Text style={styles.infos}>(19) 98437-5577 ou (19) 95207-6132</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>E-mail: </Text>
                            <Text style={styles.infos}>lucianepavini1@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Instagram: </Text>
                            <Text style={styles.infos}>@amorsuperacaoautismo</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.infos}>
                                <Text style={styles.Titleinfo}>Facebook: </Text>
                                Amor, Superação, Autismo - Projeto A.S.A</Text>
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
        fontSize: 16,

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
        marginBottom: 20

    },




})
