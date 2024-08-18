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

export default function Gafa() {
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

 

                <Image source={require('../../img/gafa/GAFA.png')}
                    style={{
                        width: 200,
                        height: 115,
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
                    imagem1={require('../../img/gafa/imagem1.png')}
                    imagem2={require('../../img/gafa/imagem3.png')}
                    imagem3={require('../../img/gafa/imagem2.png')} />

                <View style={styles.card}>
                    <View>
                        <Text style={styles.ttlGP}> Sobre a GAFA </Text>
                        <Text style={styles.mainTXGP}>
                            Observando o aumento do número de diagnósticos do Transtorno
                            do Espectro Autista (TEA) e pela necessidade de orientar os pai
                            s a compreenderem melhor as necessidades da criança com este diagnóstico,
                            o G.A.F.A. (Grupo de apoio a família autista) oferece um trabalho de orientação e
                            acolhimento para as famílias.</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Fonte: </Text>
                            <Text style={styles.infos}>diariopcd.com.br</Text>
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
                        }}>Localização:</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Estado: </Text>
                            <Text style={styles.infos}>São Paulo</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Cidade: </Text>
                            <Text style={styles.infos}>Campinas</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>CEP: </Text>
                            <Text style={styles.infos}>13084-200</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.infos}>
                                <Text style={styles.Titleinfo}>Endereço: </Text>
                                Rua Francisco Andreo Aledo, 141 - Bairro Vila Santa Isabel</Text>
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
                            <Text style={styles.infos}>(19) 99972-1255</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Instagram: </Text>
                            <Text style={styles.infos}>@associacaogafa</Text>
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
        marginBottom: 20,
    },


})
