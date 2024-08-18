import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import Carrossel from '../../components/carrossel/carrossel'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder'
import { useNavigation } from '@react-navigation/native';
import Post from '../info/post';
import CompDireitos from '../../components/compDireito/compDireito';

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Home() {
    
    //Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });
    if (!fonteLoaded) {
        return null;
    }
    //navegacao stack
    const navegacao = useNavigation()

    function usuario() {
        navegacao.navigate('usuario')
    }

    function formulario() {
        navegacao.navigate('formulario')
    }

    function info1() {
        navegacao.navigate('info1')
    }

    function direitos() {
        navegacao.navigate('direitos')
    }

    function favoritos() {
        navegacao.navigate('favoritos')
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <View style={styles.container}>
                <Image source={require('../../img/menu.png')}
                    style={styles.menuImage} />

                <TouchableOpacity style={styles.personIconWrapper} onPress={usuario}>
                    <View style={styles.personIconBackground}>
                        <Ionicons name="person" size={30} color={'white'} style={styles.personIcon} />
                    </View>
                </TouchableOpacity>
                <View style={styles.main}>
                    <View style={styles.imageContainer}>
                            <Image source={require('../../img/aaaPNG.png')}
                                style={styles.mainImage} />
                    </View>

                    <View>
                        <TouchableOpacity onPress={formulario}>
                            <View style={styles.form}>
                                <Text style={styles.textForm}>Formulário Hipótese Diagnóstica</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.favorites}>
                            <TouchableOpacity style={styles.btnfav} onPress={favoritos}>
                                <Ionicons name="bookmark" size={45} color={'#81B1FA'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.gpApoio}>
                        <Text style={styles.textApoio}>Grupos de Apoio</Text>
                        <Carrossel style={styles.carrossel} />
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.textPost}>Novos!</Text>
                        <View style={styles.postContent}>
  
                            <CompDireitos />

                            <TouchableOpacity onPress={direitos} style={styles.btn2}>
                                <Text style={styles.textbtn2}>SAIBA MAIS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    menuImage: {
        top: 0,
        width: '100%',
        height: 109,
        zIndex: -2,
    },
    personIconWrapper: {
        position: 'absolute',
        top: 40,  
        right: 20,  
    },
    personIconBackground: {
        backgroundColor: color.azulCaneta,
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    personIcon: {
        alignSelf: 'center',
    },
    main: {
        top: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainImage: {
        width: 360,
        height: 175,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        top: 20,
    },
    form: {
        width: 290,
        height: 52,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        padding: 10,
        top: 40,
        left: 15
    },
    textForm: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: color.azulPadrao
    },
    favorites: {
        alignSelf: 'flex-end',
        right: 25,
        bottom: 10
    },
    gpApoio: {
        marginTop: 10,
        marginBottom: 10,
    },
    textApoio: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Inder_400Regular',
        borderBottomWidth: 2,
        borderBottomColor: '#81B1FA',
        width: 190
    },
    post: {},
    textPost: {
        width: 90,
        fontSize: 24,
        fontFamily: 'Inder_400Regular',
        borderBottomWidth: 2,
        borderBottomColor: '#81B1FA',
        marginLeft: 15
    },
    postContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    btn2: {
        width: 200,
        height: 52,
        backgroundColor: color.azulClaro,
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
    }
})
