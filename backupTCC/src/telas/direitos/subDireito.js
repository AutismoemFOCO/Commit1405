import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import text1 from './text'

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function SubDireito() {

    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const handleLikePress = () => {
        setLiked(!liked);
    };

    const handleFavoritePress = () => {
        setFavorited(!favorited);
    };

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

                <View style={styles.main}>

                    <Text style={{ width: 250, fontSize: 17, fontWeight: 500 }}>CipTea” - Carteira de Identificação
                        da Pessoa com Transtorno do Espectro Autista</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: color.azulPadrao,
                            backgroundColor: color.azulPadrao,
                            borderRadius: 10,
                            width: 250,
                            marginTop: 10,
                            marginBottom: 10,

                        }}></View>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image source={require('../../img/PUCSPlogo.png')}
                                style={styles.univLogo} />
                        </TouchableOpacity>

                        <View style={{ left: 5 }}>
                            <Text style={{ width: 270 }}>
                                Construção de uma cartilha como tecnologia
                                educativa sobre a vida e os direitos da pessoa
                                com Transtorno do Espectro Autista
                            </Text>
                            <Text
                                style={{
                                    color: '#B4B4B4'
                                }}>Autores</Text>
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
                            marginTop: 10,
                            marginBottom: 10,

                        }}></View>



                    <Text
                        style={{
                            paddingBottom: 5,
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: color.azulPadrao
                        }}>Como Emitir:</Text>



                    {text1.trim().split('\n\n').map((paragraph, index) => (
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
                            marginTop: 10,
                            marginBottom: 10,

                        }}></View>


                    <View style={styles.bottomMain}>
                        <View style={styles.icons}>

                            <TouchableOpacity onPress={handleLikePress} style={{ marginRight: 10, }} >
                                <View style={styles.borderIcon}>
                                    {liked ? (
                                        <Icon name="heart" size={35} color={'red'} />
                                    ) : (
                                        <Icon name="heart-outline" size={35} color={'#61A0FF'} />
                                    )}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleFavoritePress} style={{ marginRight: 10, }} >
                                <View style={styles.borderIcon}>
                                    {favorited ? (
                                        <Icon name="bookmark" size={35} color={'#61A0FF'} />
                                    ) : (
                                        <Icon name="bookmark-outline" size={35} color={'#61A0FF'} />
                                    )}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: 10, }}>
                                <View style={styles.borderIcon}>
                                    <Icon name="share-variant" size={35} color={'#61A0FF'} style={{

                                    }} />
                                </View>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity>
                            <Text
                                style={styles.lerCompleto}>
                                Ler artigo completo
                            </Text>
                        </TouchableOpacity>
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
    main: {
        borderWidth: 2,
        padding: 20,
        width: 360,
        alignSelf: 'center',
        borderColor: color.azulPadrao,
        borderRadius: 15,
        marginTop: 20
    },

    univLogo: {
        width: 49,
        height: 75
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
