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

export default function Direitos() {
    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });
    if (!fonteLoaded) {
        return null;
    }

    const navegacao = useNavigation()

    function subDireito() {
        navegacao.navigate('subDireito')
    }
    function direito2() {
        navegacao.navigate('direito2')
    }

    function direito3() {
        navegacao.navigate('direito3')
    }

    function direito4() {
        navegacao.navigate('direito4')
    }

    function direito2() {
        navegacao.navigate('direito2')
    }

    function direito5() {
        navegacao.navigate('direito5')
    }

    function direito6() {
        navegacao.navigate('direito6')
    }

    function direito7() {
        navegacao.navigate('direito7')
    }

    function direito8() {
        navegacao.navigate('direito8')
    }

    function direito9() {
        navegacao.navigate('direito9')
    }

    function direito10() {
        navegacao.navigate('direito10')
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

                    <TouchableOpacity onPress={subDireito}>


                        {/*Lista de Imagens de cada box de direito*/}


                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textPostLeft}>
                                    CipTea - Carteira de Identificação da Pessoa com Transtorno do Espectro Autista
                                </Text>
                            </View>
                            <Image source={require('../../img/direitosGeral/imagem1.png')} style={styles.cantoTopImage1} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito2}>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/direitosGeral/imagem2.png')} style={styles.cantoTopImage2} />
                                <Text style={[styles.textPostRight, {width: 215, left: 20}]}>
                                    Direito à 50% de desconto em eventos de cultura e locais de lazer
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito3}>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={[styles.textPostLeft, {left: 5}]}>
                                    Direito á Saúde e Atendimento Integral para Pessoas Autistas
                                </Text>
                            </View>
                            <Image source={require('../../img/direitosGeral/imagem3.png')} style={styles.cantoTopImage3} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito4}>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/direitosGeral/imagem4.png')} style={styles.cantoTopImage4} />
                                <Text style={[styles.textPostRight, {width: 195, left: 50}]}>
                                   Direito à Atendimento Prioritário: Lei nº 14.626/2020
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito5}>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={[styles.textPostLeft, {width: 210, left: 10}]}>
                                    Direito à Redução do Horário de Trabalho: Lei 13.370/2016
                                </Text>
                            </View>
                            <Image source={require('../../img/direitosGeral/imagem5.png')} style={styles.cantoTopImage5} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito6}>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/direitosGeral/imagem6.png')} style={styles.cantoTopImage6} />
                                <Text style={[styles.textPostRight, {left: 30}]}>
                                    Lei 7.853/1989: Apoio e Proteção às Pessoas com Deficiência
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito7}>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={styles.textPostLeft}>
                                    Transporte Gratuito para Pessoas com Deficiência (Lei Federal nº 8.899/1994)
                                </Text>
                            </View>
                            <Image source={require('../../img/direitosGeral/imagem7.png')} style={styles.cantoTopImage7} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito8}>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/direitosGeral/imagem8.png')} style={styles.cantoTopImage8} />
                                <Text style={[styles.textPostRight, {left: 30}]}>
                                    Lei 7.611/2011: Presença de Profissional de Acompanhamento
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito9}>
                        <View style={styles.post}>
                            <View style={styles.namePostLeft}>
                                <Text style={[styles.textPostLeft, {fontSize: 17}]}>
                                Desconto em Passagens Aéreas para Pessoas com Necessidade de Assistência Especial (PNAE)
                                </Text>
                            </View>
                            <Image source={require('../../img/direitosGeral/imagem9.png')} style={styles.cantoTopImage9} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={direito10}>
                        <View style={styles.post}>
                            <View style={styles.contentRight}>
                                <Image source={require('../../img/direitosGeral/imagem10.png')} style={styles.cantoTopImage10} />
                                <Text style={[styles.textPostRight, {left: 30}]}>
                                Sessões Terapêuticas Ilimitadas para Pessoas Autistas 
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 80 }}></View>
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
        lineHeight: 26,
        paddingLeft: 5,
        paddingRight: 30,
        width: 250,
        fontSize: 18
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

    textPostRight: {
        lineHeight: 30,
        width: 250,
        fontSize: 18
    },

    //Lista de imagens 

    cantoTopImage1: {
        width: 110,
        height: 100,
        zIndex: -1,
        right: 10
    },

    cantoTopImage2: {
        width: 110,
        height: 80,
        zIndex: -1,
        left: 10
    },

    cantoTopImage3: {
        width: 92,
        height: 90,
        zIndex: -1,
        right: 15
    },

    cantoTopImage4: {
        width: 96,
        height: 94,
        zIndex: -1,
        left: 10
    },

    cantoTopImage5: {
        width: 98,
        height: 94,
        zIndex: -1,
        right: 30
    },

    cantoTopImage6: {
        width: 93,
        height: 100,
        zIndex: -1,
        left: 10
    },

    cantoTopImage7: {
        width: 120,
        height: 70,
        zIndex: -1,
        left: 10
    },

    cantoTopImage8: {
        width: 93,
        height: 100,
        zIndex: -1,
        left: 10
    },

    cantoTopImage9: {
        width: 93,
        height: 100,
        zIndex: -1,
        right: 15
    },

    cantoTopImage10: {
        width: 93,
        height: 100,
        zIndex: -1,
        left: 10
    },
});
