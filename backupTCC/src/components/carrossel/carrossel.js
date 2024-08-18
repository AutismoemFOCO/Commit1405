import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Carrossel() {

    return (
        <View>
            <ScrollView horizontal>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                                <Image source={require('../../img/aMais.png')} 
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 300,
                                    alignSelf: 'center'
                                }}/>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                            <Image source={require('../../img/supermaes.png')} 
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 300,
                                    alignSelf: 'center'
                                }}/>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                            <Image source={require('../../img/aMais.png')} 
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 300,
                                    alignSelf: 'center'
                                }}/>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                            <Image source={require('../../img/aMais.png')} 
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 300,
                                    alignSelf: 'center'
                                }}/>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ScrollView style={styles.borda} horizontal>
                            <View style={styles.item}>
                            <Image source={require('../../img/aMais.png')} 
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 300,
                                    alignSelf: 'center'
                                }}/>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Ionicons name="arrow-forward" size={60} color={'#81B1FA'}
                        style={{top: 10}}/>
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
