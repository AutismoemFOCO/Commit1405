import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Modal, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
};

export default function Formulario() {
    

    const navegacao = useNavigation();
    const [loading, setLoading] = useState(false); // Adiciona estado de carregamento

    function startForm() {
        setLoading(true); // Define estado de carregamento para true
        setTimeout(() => {
            navegacao.navigate('startForm');
            setLoading(false); // Define estado de carregamento para false após a navegação
        }, 1000); // Simula um atraso de 1 segundo antes da navegação
    }

    function home() {
        navegacao.navigate('home');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />

                <Image source={require('../../img/menu.png')}
                    style={styles.menuImage} />

                <View style={styles.main}>
                    <View style={styles.form}>
                        <Text style={styles.textForm}>Formulário Hipótese Diagnóstica</Text>
                    </View>

                    <View style={styles.principal}>

                        <Text style={styles.ttlForm}> Qual a função desse formulário de hipótese? </Text>

                        <Text style={styles.mainForm}>
                            O Formulário de Hipótese Diagnóstica de
                            Autismo para Crianças é projetado para
                            identificar sinais e sintomas que podem
                            sugerir a presença do Transtorno do Espectro
                            Autista (TEA). Ele serve como uma ferramenta
                            inicial para ajudar pais e profissionais a identificar
                            possíveis áreas de preocupação. É importante lembrar
                            que o formulário oferece apenas uma hipótese e não
                            substitui a avaliação de um profissional qualificado,
                            como um pediatra, psiquiatra ou psicólogo especializado.
                        </Text>

                    </View>

                    <View style={styles.principal}>

                        <Text style={styles.ttlForm}>Escala M-CHAT</Text>

                        <Text style={styles.mainForm}>
                            A Escala M-CHAT (Modified Checklist for Autism in Toddlers)
                            é uma ferramenta amplamente utilizada para rastrear sinais de
                            autismo em crianças pequenas. Consiste em um conjunto de perguntas
                            simples e padronizadas que ajudam a identificar comportamentos
                            típicos e atípicos associados ao Transtorno do Espectro Autista
                            (TEA). A Escala M-CHAT é uma forma eficaz de iniciar a investigação
                            sobre o desenvolvimento da criança e deve ser seguida por uma avaliação
                            mais aprofundada feita por um profissional qualificado.
                        </Text>

                    </View>
                    <TouchableOpacity onPress={startForm}
                        style={styles.btn2}>
                        <Text style={styles.textbtn2}>INICIAR</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={home}>
                    <Ionicons name="arrow-back-outline" size={60} color={'#81B1FA'}
                        style={{ top: 10, marginLeft: 20 }} />
                </TouchableOpacity>

                <View style={{ height: 30 }}></View>

                {/* Modal de Carregamento */}
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={loading}
                    onRequestClose={() => setLoading(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContent}>
                            <ActivityIndicator size="large" color={color.azulPadrao} />
                            <Text style={{ fontSize: 20 }}>Carregando...</Text>
                        </View>
                    </View>
                </Modal>
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
    form: {
        width: 290,
        height: 52,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        padding: 10,
        marginTop: 40,
        marginBottom: 10,
    },

    textForm: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: color.azulPadrao
    },

    menuImage: {
        top: 0,
        width: '100%',
        height: 109
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

    ttlForm: {
        fontSize: 22,
        width: 300,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '900',
        color: color.azulClaro,
        lineHeight: 30
    },
    mainForm: {
        lineHeight: 28,
        alignSelf: 'center',
        textAlign: 'center',
        width: 340,
        marginTop: 20,
        fontSize: 16,
    },

    btn2: {
        width: 225,
        height: 52,
        backgroundColor: color.azulPadrao,
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 20,
        alignSelf: 'center'
    },

    textbtn2: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    loadingContainer: { // Estilos para o container de carregamento
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    modalBackground: { // Estilos para o fundo do modal
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: { // Estilos para o conteúdo do modal
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    }
});
