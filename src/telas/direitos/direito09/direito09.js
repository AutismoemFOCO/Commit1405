import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';

import { useNavigation } from '@react-navigation/native';

import text09 from './text09'

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Direito09() {

    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const handleLikePress = () => {
        setLiked(!liked);
    };

    const handleFavoritePress = () => {
        setFavorited(!favorited);
    };

    const navegacao = useNavigation()

    function revista() {
        navegacao.navigate('revista')
    }

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
                <Image source={require('../../../img/menu.png')}
                    style={{
                        top: 0,
                        width: '100%',
                        height: 109
                    }} />

                <View style={styles.main}>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',

                    }}>
                        <Image source={require('../../../img/direitosGeral/imagem9.png')}
                            style={[styles.univLogo, { top: 10 }]} />

                        <View style={{ left: 5, top: 20 }}>
                            <Text style={{ width: 250, fontSize: 18, fontWeight: 500, bottom: 20 }}>
                                Desconto em Passagens Aéreas para Pessoas com Necessidade de Assistência Especial (PNAE)
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            borderWidth: 4,
                            borderColor: color.azulPadrao,
                            backgroundColor: color.azulPadrao,
                            borderRadius: 10,
                            alignSelf: 'center',
                            width: 320,
                            marginTop: 20,
                            marginBottom: 20,

                        }}></View>

                    {text09.trim().split('\n\n').map((paragraph, index) => (
                        <Text key={index} style={styles.textStyle}>{paragraph}</Text>
                    ))}

                    <View
                        style={{
                            borderWidth: 4,
                            borderColor: color.azulPadrao,
                            backgroundColor: color.azulPadrao,
                            borderRadius: 10,
                            alignSelf: 'center',
                            width: 320,
                            marginTop: 20,
                            marginBottom: 20,

                        }}></View>


                </View>
                <View style={{ marginBottom: 40 }}></View>

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
    main: {
        borderWidth: 2,
        padding: 20,
        width: 375,
        alignSelf: 'center',
        borderColor: color.azulPadrao,
        borderRadius: 15,
        marginTop: 60
    },

    univLogo: {
        width: 72,
        height: 78
    },

    textStyle: {

        fontSize: 16
    },

    lerCompleto: {
        color: color.azulPadrao,
        fontSize: 15,
        textAlign: 'right',
        textDecorationLine: 'underline'
    },
    icons: {
        flexDirection: 'row',

    },
    borderIcon: {
        borderWidth: 1,
        borderColor: color.azulPadrao,
        borderRadius: 100,
        padding: 5

    }
})
