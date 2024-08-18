import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar, Modal, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { getAuth, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Usuario() {
    // Carregar fonte
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });

    // Estados
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data_nas, setData_Nas] = useState('');
    const [sexo, setSexo] = useState('');
    const [senhaAtual, setSenhaAtual] = useState('');
    const [originalData, setOriginalData] = useState({});
    const [loading, setLoading] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    // Navegação e autenticação
    const navegacao = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser;

    // Efeito para buscar dados do usuário
    useEffect(() => {
        if (user) {
            const userId = user.uid;
            const fetchUserData = async () => {
                try {
                    const userRef = doc(db, "cadastro", userId);
                    const userDoc = await getDoc(userRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setNome(userData.name_cad || '');
                        setEmail(userData.email_cad || '');
                        setTelefone(userData.telefone || '');
                        setData_Nas(userData.data_nas || '');
                        setSexo(userData.sexo || '');
                        setOriginalData({
                            nome: userData.name_cad || '',
                            email: userData.email_cad || '',
                            telefone: userData.telefone || '',
                            data_nas: userData.data_nas || '',
                            sexo: userData.sexo || ''
                        });
                    } else {
                        console.log("Documento não encontrado");
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário: ", error);
                } finally {
                    setLoadingData(false);
                }
            };
            fetchUserData();
        }
    }, [user]);

    // Funções auxiliares
    const handleDateChange = (text, setter) => {
        const cleaned = ('' + text).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
        if (match) {
            const formatted = !match[2] ? match[1] : `${match[1]}/${match[2]}` + (match[3] ? `/${match[3]}` : '');
            setter(formatted);
        } else {
            setter(text);
        }
    };

    const reauthenticateUser = async (user, currentPassword) => {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        try {
            await reauthenticateWithCredential(user, credential);
            console.log('Usuário reautenticado com sucesso.');
        } catch (error) {
            console.error('Erro ao reautenticar o usuário: ', error);
            throw error;
        }
    };

    const updateUserEmail = async (user, newEmail, currentPassword) => {
        try {
            await reauthenticateUser(user, currentPassword);
            await updateEmail(user, newEmail);
            console.log('E-mail atualizado com sucesso.');
        } catch (error) {
            console.error('Erro ao atualizar o e-mail: ', error);
            throw error;
        }
    };

    const updateUser = async (userId, updates) => {
        setLoading(true);
        try {
            const userRef = doc(db, "cadastro", userId);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                throw new Error("Documento não encontrado");
            }

            await updateDoc(userRef, updates);

            if (updates.email_cad !== email) {
                await updateUserEmail(user, updates.email_cad, senhaAtual);
            }

            console.log("Dados do usuário atualizados com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar dados do usuário: ", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = () => {
        if (user) {
            const userId = user.uid;
            const updates = {
                name_cad: nome,
                email_cad: email,
                telefone: telefone,
                data_nas: data_nas,
                sexo: sexo,
            };
            updateUser(userId, updates);
        }
    };

    const handleCancel = () => {
        setNome(originalData.nome);
        setEmail(originalData.email);
        setTelefone(originalData.telefone);
        setData_Nas(originalData.data_nas);
        setSexo(originalData.sexo);
    };

    // Renderização condicional para carregamento de fontes
    if (!fonteLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <View style={styles.container}>
                <Image source={require('../../img/menu.png')} style={styles.menuImage} />
                <View style={styles.main}>
                    <TouchableOpacity onPress={() => navegacao.navigate('home')}>
                        <Ionicons name="arrow-back-outline" size={40} color={'#81B1FA'} style={{ top: 10, marginLeft: 20 }} />
                    </TouchableOpacity>

                    <View style={styles.fundo}>
                        <View style={styles.form}>
                            <Text style={styles.textForm}>Perfil de Usuário</Text>
                        </View>

                        <Text style={{ alignSelf: 'center', fontSize: 22, fontFamily: 'Inder_400Regular', marginBottom: 20 }}>
                            Dados do Usuário:
                        </Text>

                        <View style={{ left: 5 }}>
                            <Text style={styles.title}>Nome:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={nome}
                                onChangeText={setNome}
                                placeholder="Digite o nome"
                            />

                            <Text style={styles.title}>Data de Nascimento:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={data_nas}
                                placeholder="DD/MM/YYYY"
                                onChangeText={(text) => handleDateChange(text, setData_Nas)}
                                keyboardType="numeric"
                            />

                            <Text style={styles.title}>Sexo:</Text>
                            <View style={styles.genderContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.genderButton,
                                        { backgroundColor: sexo === 'Masculino' ? '#96C0FF' : '#fff' }
                                    ]}
                                    onPress={() => setSexo('Masculino')}
                                >
                                    <Text style={styles.genderText}>Masculino</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.genderButton,
                                        { backgroundColor: sexo === 'Feminino' ? '#96C0FF' : '#fff' }
                                    ]}
                                    onPress={() => setSexo('Feminino')}
                                >
                                    <Text style={styles.genderText}>Feminino</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.title}>Email:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Digite o email"
                                keyboardType="email-address"
                            />

                            <Text style={styles.title}>Celular:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={telefone}
                                onChangeText={setTelefone}
                                placeholder="Digite o celular"
                                keyboardType="phone-pad"
                            />

                            <Text style={styles.title}>Senha Atual Para Atualizar E-mail:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={senhaAtual}
                                onChangeText={setSenhaAtual}
                                placeholder="Digite a senha atual"
                                secureTextEntry={true}
                            />

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                                    <Text style={styles.buttonText}>Atualizar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                                    <Text style={styles.buttonText}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

             {/* Modal de Carregamento de Dados */}
             <Modal
                transparent={true}
                animationType="none"
                visible={loadingData}
                onRequestClose={() => setLoadingData(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <ActivityIndicator size="large" color="#2C78E9" />
                        <Text style={{fontSize: 20, color: "black"}}>Carregando dados...</Text>
                    </View>
                </View>
            </Modal>

            {/* Modal de carregamento */}
            <Modal
                transparent={true}
                animationType="none"
                visible={loading}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <ActivityIndicator size="large" color="#81B1FA" />
                        <Text style={styles.modalText}>Atualizando...</Text>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    menuImage: {
        top: 0,
        width: '100%',
        height: 109,
        zIndex: -2,
    },
    form: {
        width: 290,
        height: 52,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    },
    textForm: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulPadrao
    },
    fundo: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 13,
        padding: 10,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: 350,
        height: 50,
        backgroundColor: 'rgba(29,174,255,0.2)',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 60,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Inder_400Regular',
        fontSize: 20,
        textAlign: 'left',
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    genderButton: {
        width: 150,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd'
    },
    genderText: {
        fontFamily: 'Inder_400Regular',
        fontSize: 18,
        color: '#333'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
    },
    updateButton: {
        backgroundColor: color.azulPadrao,
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center'
    },
    cancelButton: {
        backgroundColor: '#FA8072',
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inder_400Regular',
        fontSize: 18
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    modalText: {
        marginTop: 10,
        fontFamily: 'Inder_400Regular',
        fontSize: 16
    }
});