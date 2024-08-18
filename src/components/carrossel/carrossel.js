import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


export default function Carrossel() {

    //navegacao stack
    const navegacao = useNavigation()

    function apoio() {
        navegacao.navigate('apoio')
    }

    function aMais() {
        navegacao.navigate('aMais')
    }

    function amaah() {
        navegacao.navigate('amaah')
    }
    function assuma() {
        navegacao.navigate('assuma')
    }

    function gafa() {
        navegacao.navigate('gafa')
    }

    function asa() {
        navegacao.navigate('asa')
    }


    return (
        <View>
            <ScrollView horizontal>
                <View style={styles.container}>
                    <TouchableOpacity onPress={aMais}>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                                <Image source={require('../../img/aMais/amais.jpg')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        borderRadius: 300,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                    </TouchableOpacity>


                    

                    <TouchableOpacity onPress={assuma}>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                                <Image source={require('../../img/assuma/assumaa.jpg')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        borderRadius: 300,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={amaah}>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                                <Image source={require('../../img/amaah/amaah.jpg')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        borderRadius: 300,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={gafa}>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                                <Image source={require('../../img/gafa/GAFA.png')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        borderRadius: 300,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={asa}>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                                <Image source={require('../../img/asa/asa.jpg')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        borderRadius: 300,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                    </TouchableOpacity>


                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,

    },
    borda: {
        borderWidth: 5,
        borderColor: '#81B1FA',
        borderRadius: 50,
        backgroundColor: '#81B1FA',
        margin: 10,

    },
    item: {
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
    },
});

/*<TouchableOpacity onPress={apoio}>
        <Ionicons name="arrow-forward" size={60} color={'#81B1FA'}
            style={{top: 10}}/>
    </TouchableOpacity> 
*/
