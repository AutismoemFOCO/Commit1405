import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Carrossel from '../../components/carrossel/carrossel';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';


const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
};

export default function CompDireitos() {
    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });

    const navegacao = useNavigation()

    function direito10() {
        navegacao.navigate('direito10')
    }

    function direito7() {
        navegacao.navigate('direito7')
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />

                    <TouchableOpacity onPress={direito10}>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/direitosGeral/imagem10.png')} style={styles.cantoTopImage10} />
                                <Text style={styles.textPostRight}>
                                Sessões Terapêuticas Ilimitadas para Pessoas Autistas 
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito7}>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textPostLeft}>
                                    Transporte Gratuito para Pessoas com Deficiência
                                </Text>
                            </View>
                            <Image source={require('../../img/direitosGeral/imagem7.png')} style={styles.cantoTopImage7} />
                        </View>
                    </TouchableOpacity>
                
             
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    post: {
        width: 370,
        height: 136,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 10,
        marginTop: 30,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },


    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    contentRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textNumberRight: {
        fontSize: 25,
        fontWeight: 'bold',
        color: color.azulPadrao,
        bottom: 30,
        marginLeft: 40

    },
    textPostRight: {
        lineHeight: 30,
        width: 255,
        fontSize: 20,
        left: 20
    },

    cantoTopImage10: {
        width: 93,
        height: 100,
        zIndex: -1,
        left: 10
    },

    namePostLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10
    },
    textPostLeft: {
        lineHeight: 28,
        paddingLeft: 5,
        paddingRight: 30,
        width: 240,
        fontSize: 20,
        left: 20
    },

    cantoTopImage7: {
        width: 120,
        height: 70,
        zIndex: -1,
        left: 10
    },
});
