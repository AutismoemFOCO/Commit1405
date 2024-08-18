import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';



const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Revistas() {

    const navegacao = useNavigation()

    function direitos() {
        navegacao.navigate('direitos')
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

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Revistas</Text>
                </View>

                <View style={styles.main}>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',

                    }}>
                        <View style={{ left: 5 }}>

                            <View style={styles.nameuniv}>
                                <Text style={styles.textUnivname}>PUC-SP</Text>
                            </View>

                            <Text style={{
                                width: 190,
                                fontSize: 17,
                                marginTop: 'auto',
                            }}>
                                Pontifícia Universidade Católica de São Paulo.
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../img/pucsp2.png')}
                                style={styles.univLogo} />
                        </TouchableOpacity>


                    </View>

                    <View
                        style={{
                            borderWidth: 2,
                            borderColor: color.azulClaro,
                            borderRadius: 10,
                            width: 150,
                            marginTop: 10,
                            marginBottom: 10,

                        }}></View>

                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: '#E4EEFB',
                            borderRadius: 10,
                            alignSelf: 'center',
                            width: 320,
                            marginTop: 10,
                            marginBottom: 10,

                        }}></View>
                    <View style={styles.card}>
                        <Text style={styles.mainTXGP}>
                            O objetivo do Grupo de Apoio é ampliar
                            a rede de informações para esse público,
                            estimulando também a troca de experiência
                            entre os participantes, no intuito de
                            melhorar o enfrentamento da doença e
                            o relacionamento entre família e paciente
                            . O Grupo é aberto para a comunidade e a
                            participação é gratuita.
                            O objetivo do Grupo de Apoio é ampliar
                            a rede de informações para esse público,
                            estimulando também a troca de experiência
                            entre os participantes, no intuito de
                            melhorar o enfrentamento da doença e
                            o relacionamento entre família e paciente
                            . O Grupo é aberto para a comunidade e a
                            participação é gratuita.</Text>

                        <TouchableOpacity onPress={direitos}>
                            <Ionicons name="arrow-back" size={60} color={'#81B1FA'}
                                style={{ top: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        width: 275,
        height: 52,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        padding: 10,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    textTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulPadrao
    },
    main: {
        padding: 20,
        width: 360,
        alignSelf: 'center',
    },

    univLogo: {
        width: 130,
        height: 130
    },
    nameuniv: {
        width: 130,
        height: 40,
        backgroundColor: '#E4EEFB',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 'auto'
    },

    textUnivname: {
        fontSize: 20,
        alignSelf: 'center',
        top: 6,
        fontWeight: 'bold'
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

    mainTXGP: {
        lineHeight: 30,
        textAlign: 'center',
        alignSelf: 'center',
        width: 330,
        marginTop: 20,
        fontSize: 16,

    },
})
