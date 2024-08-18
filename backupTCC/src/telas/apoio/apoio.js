import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder'


import Carrossel from '../../components/carrossel/carrossel';

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Apoio() {
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

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Grupos de Apoio</Text>
                </View>

                <Carrossel />

                <View style={styles.principal}>

                    <Text style={styles.ttlGP}> O que é o Grupo de Apoio? </Text>
                    <Text style={styles.mainTXGP}>O objetivo do Grupo de Apoio é ampliar a rede de informações para esse público, estimulando também a troca de experiência entre os participantes, no intuito de melhorar o enfrentamento da doença e o relacionamento entre família e paciente. O Grupo é aberto para a comunidade e a participação é gratuita.</Text>

                    <Image source={require('../../img/team.png')}
                        style={{
                            width: 156,
                            height: 112,
                            alignSelf: 'center'
                        }} />
                </View>


                <Text style={{
                    alignSelf: 'center',
                    width: 160,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Inder_400Regular',
                    marginTop: 20,
                    borderBottomWidth: 2,
                    borderBottomColor: '#81B1FA'
                }}>
                    Encontre o local mais perto de você!!
                </Text>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Text style={{
                            fontFamily: 'Inder_400Regular',
                            fontSize: 24,
                            width: 130,
                            borderBottomWidth: 2,
                            borderBottomColor: '#81B1FA'
                        }}>aMais</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}>
                            <Image source={require('../../img/aMais.png')}
                                style={{
                                    width: 141,
                                    height: 83,
                                    marginTop: 20,

                                }} />

                            <Text style={{
                                width: 190,
                                marginLeft: 15,
                                fontFamily: 'Inder_400Regular'
                            }}>
                                O aMAIS é um grupo para levar
                                informação a respeito de autismo
                                a toda a sociedade e compartilhar
                                experiências entre familias afetadas
                                por esta síndrome são os principais
                                objetivos deste projeto.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Text style={{
                            fontFamily: 'Inder_400Regular',
                            fontSize: 24,
                            width: 130,
                            marginLeft: 'auto',
                            borderBottomWidth: 2,
                            borderBottomColor: '#81B1FA'
                        }}>SuperMães</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}>
                            <Text style={{
                                width: 190,
                                marginRight: 10,
                                marginLeft: 5,
                                fontFamily: 'Inder_400Regular'
                            }}>
                                O grupo SuperMães funciona de forma
                                autônoma e sem fins lucrativos.
                                Promove palestras gratuitas a profissionais
                                das mais variadas áreas, como saúde e educação.
                            </Text>

                            <Image source={require('../../img/supermaes.png')}
                                style={{
                                    width: 120,
                                    height: 122,
                                    marginTop: 20,
                                }} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Text style={{
                            fontFamily: 'Inder_400Regular',
                            fontSize: 24,
                            width: 130,
                            borderBottomWidth: 2,
                            borderBottomColor: '#81B1FA'
                        }}>aMais</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}>
                            <Image source={require('../../img/aMais.png')}
                                style={{
                                    width: 141,
                                    height: 83,
                                    marginTop: 20,

                                }} />

                            <Text style={{
                                width: 190,
                                marginLeft: 15,
                                fontFamily: 'Inder_400Regular'
                            }}>
                                O aMAIS é um grupo para levar
                                informação a respeito de autismo
                                a toda a sociedade e compartilhar
                                experiências entre familias afetadas
                                por esta síndrome são os principais
                                objetivos deste projeto.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Text style={{
                            fontFamily: 'Inder_400Regular',
                            fontSize: 24,
                            width: 130,
                            marginLeft: 'auto',
                            borderBottomWidth: 2,
                            borderBottomColor: '#81B1FA'
                        }}>SuperMães</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}>
                            <Text style={{
                                width: 190,
                                marginRight: 10,
                                marginLeft: 5,
                                fontFamily: 'Inder_400Regular'
                            }}>
                                O grupo SuperMães funciona de forma
                                autônoma e sem fins lucrativos.
                                Promove palestras gratuitas a profissionais
                                das mais variadas áreas, como saúde e educação.
                            </Text>

                            <Image source={require('../../img/supermaes.png')}
                                style={{
                                    width: 120,
                                    height: 122,
                                    marginTop: 20,
                                }} />
                        </View>
                    </View>
                </TouchableOpacity>

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
    principal: {
        borderWidth: 2,
        padding: 20,
        width: 360,
        alignSelf: 'center',
        borderColor: color.azulPadrao,
        borderRadius: 15,
        marginTop: 20
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
        height: 220,
        marginTop: 20,
        fontSize: 16,

    },

    card: {
        borderWidth: 2,
        padding: 20,
        width: 360,
        alignSelf: 'center',
        borderColor: color.azulPadrao,
        borderRadius: 15,
        marginTop: 20
    }


})
