import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';

import { useNavigation } from '@react-navigation/native';

import text04 from './text04'

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Direito04() {

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
                            <Image source={require('../../../img/direitosGeral/imagem4.png')}
                                style={styles.univLogo} />

                        <View style={{ left: 5, top: 15 }}>
                            <Text style={{ width: 250, fontSize:18, fontWeight: 500 }}>
                            Atendimento Prioritário: Lei nº 14.626/2020
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

                    {text04.trim().split('\n\n').map((paragraph, index) => (
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
                <View style={{marginBottom: 50}}></View>
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
        marginTop: 20
    },

    univLogo: {
        width: 80,
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
