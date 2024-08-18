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

export default function AMAAH() {
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


                <Image source={require('../../img/amaah/AMAAHsp.jpg')}
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
                    imagem1={require('../../img/amaah/imagem2.jpg')}
                    imagem2={require('../../img/amaah/imagem3.jpg')}
                    imagem3={require('../../img/amaah/imagem1.jpg')} />



                <View style={styles.card}>
                    <View>
                        <Text style={styles.ttlGP}> Sobre o AMAAH </Text>
                        <Text style={styles.mainTXGP}>A AMAAHSP, que significa Associação de Mães
                            e Amigos do Autista de Hortolândia, é uma instituição que nasceu para
                            ajudar pessoas com autismo e orientação familiar.
                            Priscila Silvana, presidente da Associação, contou ao Portal Hortolândia
                            um pouco da sua história e como surgiu a ideia de criar essa associação.
                            Confira:</Text>

                        <Text style={styles.mainsub}>“A uns anos atrás vendo a necessidade de que
                            as famílias de crianças, adolescentes e adultos que estão dentro do espectro,
                            tive vontade de abrir uma instituição que pudesse acolher a família numa hora que
                            ela recebe o diagnóstico do filho e fica sem saber o que fazer."</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>Fonte: </Text>
                            <Text style={styles.infos}>portalhortolandia.com.br</Text>
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
                            <Text style={styles.infos}>Hortolândia</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>CEP: </Text>
                            <Text style={styles.infos}>13184-340</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.infos}>
                                <Text style={styles.Titleinfo}>Endereço: </Text>
                                Rua Andradina, 160 - Loteamento Remanso Campineiro</Text>
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
                            <Text style={styles.infos}>(19) 99346-5761</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Titleinfo}>E-mail: </Text>
                            <Text style={styles.infos}>amaahortolandia@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.infos}>
                                <Text style={styles.Titleinfo}>Facebook: </Text>
                                Associação de Mães e Amigos do Autista de Hortolândia</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}></View>
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

    },

    mainsub: {
        lineHeight: 25,
        textAlign: 'center',
        alignSelf: 'center',
        width: 330,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'italic'

    },

})
