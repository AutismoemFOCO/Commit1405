import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Inicial() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />

            <View style={styles.header}>
                <Image source={require('../../img/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.main}>
                <Image source={require('../../img/paisefilho.png')} style={styles.img1} />

                <Text style={styles.title}>
                    Bem-Vindo(a)!
                </Text>

                <Text style={styles.principal}>
                    Seu aplicativo para apoio e compreensão do diagnóstico de autismo está
                    pronto para embarcar nesta jornada junto com você e seu filho!
                </Text>

                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.textbtn1}>Já tenho uma conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.textbtn2}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        //justifyContent: 'center',
        //alignItems: 'center',
    },

    header: {
        backgroundColor: '#8ecae6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 140
    },

    logo: {
        width: 222,
        height:70,
        top: 10
    },

    main: {
        alignItems: 'center'
    },
    img1: {
        width: 200,
        height: 157,
        left: 25,
        marginTop: 50,
        marginBottom: 50
    },

    title: {
        fontSize: 25,
        color: '#2C78E9'
    },

    principal: {
        marginRight: 25,
        marginLeft: 25,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 30
    },

    btns: {
        marginTop: 30
    },

    btn1: {
        width: 275,
        height: 52,
        borderWidth: 2,
        borderColor: '#8ecae6',
        borderRadius: 15,
        padding: 10,
    },

    textbtn1: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8ecae6'
    },

    btn2: {
        width: 275,
        height: 52,
        backgroundColor: '#8ecae6',
        padding: 10,
        borderRadius: 15,
        marginTop: 20
    },

    textbtn2: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})