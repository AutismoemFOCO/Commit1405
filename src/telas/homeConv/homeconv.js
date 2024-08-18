import { View, StyleSheet, Image, Text, TouchableOpacity, StatusBar } from 'react-native'
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { useNavigation } from '@react-navigation/native'

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9',
    azulClarissimo: '#BAD4FE'
}

export default function HomeConv() {

    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });
    if (!fonteLoaded) {
        return null;
    }

    const navegacao = useNavigation()

    function direitos() {
        navegacao.navigate('direitos')
    }

    function cadastro() {
        navegacao.navigate('cadastro')
    }

    function apoio() {
        navegacao.navigate('apoio')
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />

            <Image source={require('../../img/menu.png')}
                style={{
                    top: 0,
                    width: '100%',
                    height: 109
                }} />
            <View style={styles.main}>

                <Text style={styles.title}>Bem-Vindo(a)!</Text>

                <View style={styles.botoes}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={direitos}>
                            <View style={styles.btn2}>
                                <Text style={styles.textBtn2}>Direitos do Autista</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={cadastro}>
                            <View style={styles.btn}>
                                <Text style={styles.textBtn}>Hipótese Diagnóstica</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={cadastro}>
                            <View style={styles.btn}>
                                <Text style={styles.textBtn}>Informações do Autismo</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={apoio}>
                            <View style={styles.btn2}>
                                <Text style={styles.textBtn2}>Grupos de Apoio</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={cadastro}>
                            <View style={styles.btnForm}>
                                <Text style={styles.textBtnForm}>Formulário de Hipótese Diagnóstica</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>


                <Image source={require('../../img/mommy.png')}
                    style={{
                        width: 180,
                        height: 204,
                        left: 15,
                    }} />

            </View>

            <View style={styles.contentCadastre}>
                <TouchableOpacity onPress={cadastro}>
                    <Text style={styles.cadastre}>Cadastre-se!</Text>
                </TouchableOpacity>

            </View>


            <Image source={require('../../img/bottom.png')}
                style={{
                    width: '100%',
                    height: 68,
                    position: 'absolute',
                    bottom: 0,
                    zIndex: -1
                }} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    main: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed'
    },

    title: {
        color: color.azulCaneta,
        fontSize: 25,
        paddingTop: 50,
        bottom: 10

    },
    btn: {
        borderWidth: 2,
        borderColor: color.azulClarissimo,
        borderRadius: 15,
        width: 130,
        height: 70,
        margin: 20,
    },

    textBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulClarissimo,
        top: 8,

    },

    btn2: {
        backgroundColor: color.azulPadrao,
        borderRadius: 15,
        width: 130,
        height: 70,
        margin: 20,
    },


    textBtn2: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        top: 10
    },

    btnForm: {
        borderWidth: 2,
        borderColor: color.azulClarissimo,
        borderRadius: 15,
        width: 300,
        height: 72,
        marginBottom: 30,
        marginTop: 20,
        alignSelf: 'center'
    },

    textBtnForm: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulClarissimo,
        top: 8
    },
    cadastre: {
        fontSize: 22,
        color: color.azulCaneta,
        textDecorationLine: 'underline'

    },

    contentCadastre: {
        width: 123,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 50,
        marginTop: 20
    }


})

