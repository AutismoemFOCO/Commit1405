import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Carrossel from '../../components/carrossel/carrossel';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { NavigationContainer } from '@react-navigation/native';

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
};

export default function Direitos() {
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
                    style={styles.menuImage} />

                <View style={styles.main}>

                    <View style={styles.title}>
                        <Text style={styles.textTitle}>Direitos dos Autistas</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textNumberLeft}>1- </Text>
                                <Text style={styles.textPostLeft}>
                                    CipTea - Carteira de Identificação da Pessoa com Transtorno do Espectro Autista
                                </Text>
                            </View>
                            <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                                <Text style={styles.textNumberRight}>2- </Text>
                                <Text style={styles.textPostRight}>
                                Redução da jornada de trabalhos de pais e mães 
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textNumberLeft}>3- </Text>
                                <Text style={styles.textPostLeft}>
                                Tratamento médico e terapêutico  especializado
                                </Text>
                            </View>
                            <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                                <Text style={styles.textNumberRight}>4- </Text>
                                <Text style={styles.textPostRight}>
                                Direito a estudar ensino público ou privado  
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textNumberLeft}>5- </Text>
                                <Text style={styles.textPostLeft}>
                                Passe livre a familias de baixa renda
                                </Text>
                            </View>
                            <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                                <Text style={styles.textNumberRight}>6- </Text>
                                <Text style={styles.textPostRight}>
                                Acompanhamento de um assistente terapêutico em ambiente escolar
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textNumberLeft}>7- </Text>
                                <Text style={styles.textPostLeft}>
                                Vaga de estacionamento preferencial
                                </Text>
                            </View>
                            <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                                <Text style={styles.textNumberRight}>8- </Text>
                                <Text style={styles.textPostRight}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textNumberLeft}>9- </Text>
                                <Text style={styles.textPostLeft}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </View>
                            <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/cantoTop.png')} style={styles.cantoTopImage} />
                                <Text style={styles.textNumberRight}>10- </Text>
                                <Text style={styles.textPostRight}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{height: 80}}></View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    title: {
        width: 275,
        height: 52,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        padding: 10,
    },
    textTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulPadrao
    },
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
    namePostLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10 
    },
    textPostLeft: {
        lineHeight: 30,
        paddingLeft: 5,
        paddingRight: 30,
        width: 240 
    },
    textNumberLeft: {
        fontSize: 25,
        fontWeight: 'bold',
        color: color.azulPadrao,
        bottom: 30
    },

    cantoTopImage: {
        width: 100,
        height: 100
    },
    menuImage: {
        top: 0,
        width: '100%',
        height: 109
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
        marginLeft: 50

    },
    textPostRight: {
        lineHeight: 30,
        width: 165,
    },
});
