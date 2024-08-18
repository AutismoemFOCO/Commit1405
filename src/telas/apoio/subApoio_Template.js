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

export default function SubApoioTemplate() {
    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    })

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
                <Image source={require('../../img/aMais.png')}
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
                        imagem1={require('../../img/supermaes.png')}
                        imagem2={require('../../img/supermaes.png')}
                        imagem3={require('../../img/supermaes.png')}/>



                <View style={styles.card}>
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
                        <Text style={styles.infos}>12.657-232</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: 300 }}>
                        <Text style={styles.Titleinfo}>Rua: </Text>
                        <Text style={styles.infos}>Miguel de Souza Arruda, 50 - Alvorada, Contagem </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={{
                        fontSize: 22,
                        marginBottom: 10,
                        color: color.azulPadrao,
                        fontWeight: 700
                    }}>Contato:</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>Telefone: </Text>
                        <Text style={styles.infos}>(31) 98332-1119</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>E-mail: </Text>
                        <Text style={styles.infos}>amais@gmail.com</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Titleinfo}>Instagram: </Text>
                        <Text style={styles.infos}>@amaiscontagem</Text>
                    </View>
                </View>
            </View>
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
    }


})
