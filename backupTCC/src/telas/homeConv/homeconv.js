import { View, StyleSheet, Image, Text, TouchableOpacity, StatusBar } from 'react-native'

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function HomeConv() {
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
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.textBtn}>Direitos do Autista</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn2}>
                            <Text style={styles.textBtn2}>Artigos de Informações</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.textBtn}>Apoio aos pais</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Image source={require('../../img/mommy.png')}
                    style={{
                        width: 180,
                        height: 204,
                        left: 15
                    }} />


            </View>
            <Image source={require('../../img/bottom.png')}
                style={{
                    width: '100%',
                    height: 68,
                    position: 'absolute',
                    bottom: 0,
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
        top: 20
    },
    btn: {
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        width: 275,
        height: 52,
        marginBottom: 30
    },

    textBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulPadrao,
        top: 8
    },
    btn2: {
        borderRadius: 15,
        backgroundColor: color.azulPadrao,
        width: 275,
        height: 52,
        marginBottom: 30
    },

    textBtn2: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        top: 10
    },
    botoes: {
        marginTop: 100
    }

})