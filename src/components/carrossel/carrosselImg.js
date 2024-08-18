import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// <Image source={require('../../img/supermaes.png')}

export default function CarrosselImg({imagem1, imagem2, imagem3}) {


    return (
        <View>
            <ScrollView horizontal>
                <View style={carousel.container}>

                        <ScrollView style={carousel.borda} horizontal>
                            <View style={carousel.item}>
                                <Image source={imagem1}
                                    style={{
                                        width: 340,
                                        height: 200,
                                        borderRadius: 15,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>

                        <ScrollView style={carousel.borda} horizontal>
                            <View style={carousel.item}>
                                <Image source={imagem2}
                                    style={{
                                        width: 340,
                                        height: 200,
                                        borderRadius: 15,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>

                        <ScrollView style={carousel.borda} horizontal>
                            <View style={carousel.item}>
                                <Image source={imagem3}
                                    style={{
                                        width: 340,
                                        height: 200,
                                        borderRadius: 15,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                        
                </View>
            </ScrollView>

        </View>
    );
}

const carousel = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        

    },
    borda: {
        borderWidth: 5,
        borderColor: '#81B1FA',
        borderRadius: 15,
        backgroundColor: '#81B1FA',
        margin: 10,
        width: 360,
        height: 210,
        textDecorationLine: 'none'

    },
    item: {
        width: 350,
        height: 250
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
