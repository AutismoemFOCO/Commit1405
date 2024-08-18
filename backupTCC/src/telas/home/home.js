import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'

import Carrossel from '../../components/carrossel/carrossel'

import { Ionicons } from '@expo/vector-icons'
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder'
import { NavigationContainer } from '@react-navigation/native'

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


    return (
        <ScrollView>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <View style={styles.container}>
                <Image source={require('../../img/menu.png')}
                    style={{
                        top: 0,
                        width: '100%',
                        height: 109
                    }} />
                <View style={styles.main}>


                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image source={require('../../img/image1.png')}
                                style={{
                                    width: 357,
                                    height: 173,
                                    borderWidth: 2,
                                    borderColor: color.azulPadrao,
                                    borderRadius: 15,
                                    top: 20,

                                }} />
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TouchableOpacity>
                            <View style={styles.form}>

                                <Text style={styles.textForm}>Formulário Hipótese Diagnóstica</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={styles.favorites}>
                            <TouchableOpacity style={styles.btnfav}>
                                <Ionicons name="bookmark" size={45} color={'#81B1FA'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.gpApoio}>
                        <Text style={styles.textApoio}>Grupos de Apoio</Text>
                        <Carrossel style={styles.carrossel} />
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.textPost}>Último Post</Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 100

                        }}>
                           

                            <TouchableOpacity>
                                <Image source={require('../../img/imagem2.png')}
                                    style={{
                                        width: 357,
                                        height: 173,
                                        borderWidth: 2,
                                        borderColor: color.azulPadrao,
                                        borderRadius: 15,
                                        top: 20,
                                        
                                        

                                    }} />
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

    main: {
        top: 10
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
    marginBottom: 10    },

    textApoio: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Inder_400Regular',
        borderBottomWidth: 2,
        borderBottomColor: '#81B1FA'
    },

    post:{ 
        
    },

    textPost: {
        width: 150,
        fontSize: 24,
        fontFamily: 'Inder_400Regular',
        borderBottomWidth: 2,
        borderBottomColor: '#81B1FA',
        marginLeft: 15
    },

})

/* <SafeAreaView>
   <Carrossel data={data} Ionicons={goApoio}/>
    </SafeAreaView> */