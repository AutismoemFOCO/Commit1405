import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar, } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9'
}

export default function Usuario() {
    // Fonte Inder
    const [fonteLoaded] = useFonts({
        Inder_400Regular
    });

    // Navegação stack
    const navegacao = useNavigation();

    function home() {
        navegacao.navigate('home');
    }

    // Estados para os campos do formulário do responsável
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [dataNascimentoResponsavel, setDataNascimentoResponsavel] = useState('');
    const [emailResponsavel, setEmailResponsavel] = useState('');
    const [sexoResponsavel, setSexoResponsavel] = useState('');
    const [celularResponsavel, setCelularResponsavel] = useState('');

    // Estado para armazenar os dados das crianças
    const [criancas, setCriancas] = useState([{ nome: '', sexo: '', dataNascimento: '', idade: '', relacao: '' }]);
    
    // Estado para controlar quais formulários de crianças estão visíveis
    const [formVisivel, setFormVisivel] = useState({});

    // Estados para armazenar os valores originais dos campos do responsável
    const [valoresOriginais, setValoresOriginais] = useState({
        nomeResponsavel: '',
        dataNascimentoResponsavel: '',
        emailResponsavel: '',
        sexoResponsavel: '',
        celularResponsavel: ''
    });

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

    const renderSexSelection = (selectedValue, setSelectedValue) => (
        <View style={styles.sexContainer}>
            <TouchableOpacity
                style={[styles.sexButton, selectedValue === 'male' && styles.selectedSexButton]}
                onPress={() => setSelectedValue('male')}
            >
                <Text style={styles.sexButtonText}>Masculino</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.sexButton, selectedValue === 'female' && styles.selectedSexButton]}
                onPress={() => setSelectedValue('female')}
            >
                <Text style={styles.sexButtonText}>Feminino</Text>
            </TouchableOpacity>
        </View>
    );

    const cancelarResponsavel = () => {
        setNomeResponsavel(valoresOriginais.nomeResponsavel);
        setDataNascimentoResponsavel(valoresOriginais.dataNascimentoResponsavel);
        setEmailResponsavel(valoresOriginais.emailResponsavel);
        setSexoResponsavel(valoresOriginais.sexoResponsavel);
        setCelularResponsavel(valoresOriginais.celularResponsavel);
    };

    const handleCriancaChange = (index, field, value) => {
        const updatedCriancas = criancas.map((crianca, i) =>
            i === index ? { ...crianca, [field]: value } : crianca
        );
        setCriancas(updatedCriancas);
    };

    const adicionarCrianca = () => {
        setCriancas([...criancas, { nome: '', sexo: '', dataNascimento: '', idade: '', relacao: '' }]);
    };

    const cancelarCrianca = (index) => {
        const updatedCriancas = criancas.map((crianca, i) =>
            i === index ? { nome: '', sexo: '', dataNascimento: '', idade: '', relacao: '' } : crianca
        );
        setCriancas(updatedCriancas);
    };

    const alternarFormulario = (index) => {
        setFormVisivel(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const salvarCrianca = (index) => {
        const updatedCriancas = criancas.map((crianca, i) =>
            i === index ? { ...crianca } : crianca
        );
        setCriancas(updatedCriancas);
        alternarFormulario(index);
    };

    const removerCrianca = (index) => {
        const updatedCriancas = criancas.filter((_, i) => i !== index);
        setCriancas(updatedCriancas);
        setFormVisivel(prevState => {
            const { [index]: _, ...rest } = prevState;
            return rest;
        });
    };

    return (
        <ScrollView>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <View style={styles.container}>
                <Image source={require('../../img/menu.png')} style={styles.menuImage} />
                <View style={styles.main}>
                    <TouchableOpacity onPress={home}>
                        <Ionicons name="arrow-back-outline" size={40} color={'#81B1FA'} style={{ top: 10, marginLeft: 20 }} />
                    </TouchableOpacity>

                    <View style={styles.fundo}>
                        <View style={styles.form}>
                            <Text style={styles.textForm}>Perfil de Úsuario</Text>
                        </View>

                        <Text style={{ alignSelf: 'center', fontSize: 22, fontFamily: 'Inder_400Regular', marginBottom: 20 }}>
                            Dados do Responsável:
                        </Text>

                        <View>
                            <Text style={styles.title}>Nome:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={nomeResponsavel}
                                onChangeText={setNomeResponsavel}
                                placeholder="Digite o nome"
                            />
                            <Text style={styles.title}>Sexo:</Text>
                            {renderSexSelection(sexoResponsavel, setSexoResponsavel)}

                            <Text style={styles.title}>Data de Nascimento:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={dataNascimentoResponsavel}
                                placeholder="DD/MM/YYYY"
                                onChangeText={(text) => handleDateChange(text, setDataNascimentoResponsavel)}
                                keyboardType="numeric"
                            />

                            <Text style={styles.title}>Email:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={emailResponsavel}
                                onChangeText={setEmailResponsavel}
                                placeholder="Digite o email"
                                keyboardType="email-address"
                            />

                            <Text style={styles.title}>Celular:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={celularResponsavel}
                                onChangeText={setCelularResponsavel}
                                placeholder="Digite o celular"
                                keyboardType="phone-pad"
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.buttonText}>Atualizar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelButton} onPress={cancelarResponsavel}>
                                    <Text style={styles.buttonText}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={{ alignSelf: 'center', fontSize: 22, fontFamily: 'Inder_400Regular', marginBottom: 20, marginTop: 20  }}>
                            Dados das Crianças:
                        </Text>

                        {criancas.map((crianca, index) => (
                            <View key={index} style={[styles.criancaContainer, {left: 5}]}>
                                <TouchableOpacity style={styles.resumoCrianca} onPress={() => alternarFormulario(index)}>
                                    <Text style={styles.textoResumo}>{`Nome: ${crianca.nome || ' '}`}</Text>
                                    <Text style={styles.textoResumo}>{`Idade: ${crianca.idade || ' '}`}</Text>
                                    <Text style={styles.textoResumo}>{`Data de Nascimento: ${crianca.dataNascimento || ' '}`}</Text>
                                </TouchableOpacity>

                                {formVisivel[index] && (
                                    <View style={styles.fundoCrianca}>
                                        <TouchableOpacity style={styles.removeButton} onPress={() => removerCrianca(index)}>
                                            <Ionicons name="close-circle" size={34} color="#FF6961" />
                                        </TouchableOpacity>
                                        <Text style={styles.title}>Nome:</Text>
                                        <TextInput
                                            style={styles.textInputCrianca}
                                            value={crianca.nome}
                                            onChangeText={(value) => handleCriancaChange(index, 'nome', value)}
                                            placeholder="Digite o nome"
                                        />
                                        <Text style={styles.title}>Sexo:</Text>
                                        {renderSexSelection(crianca.sexo, (value) => handleCriancaChange(index, 'sexo', value))}

                                        <Text style={styles.title}>Data de Nascimento:</Text>
                                        <TextInput
                                            style={styles.textInputCrianca}
                                            value={crianca.dataNascimento}
                                            onChangeText={(text) => handleDateChange(text, (value) => handleCriancaChange(index, 'dataNascimento', value))}
                                            placeholder="DD/MM/YYYY"
                                            keyboardType="numeric"
                                        />

                                        <Text style={styles.title}>Idade (anos):</Text>
                                        <TextInput
                                            style={styles.textInputCrianca}
                                            value={crianca.idade}
                                            onChangeText={(value) => handleCriancaChange(index, 'idade', value)}
                                            placeholder="Digite a idade"
                                            keyboardType="numeric"
                                        />

                                        <Text style={styles.title}>Relação com a Criança:</Text>
                                        <TextInput
                                            style={styles.textInputCrianca}
                                            value={crianca.relacao}
                                            onChangeText={(value) => handleCriancaChange(index, 'relacao', value)}
                                            placeholder="Digite a relação"
                                        />

                                      
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity style={styles.updateButton} onPress={() => salvarCrianca(index)}>
                                                <Text style={styles.buttonText}>Salvar</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.cancelButton} onPress={() => cancelarCrianca(index)}>
                                                <Text style={styles.buttonText}>Cancelar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </View>
                        ))}

                        <TouchableOpacity style={styles.addButton} onPress={adicionarCrianca}>
                            <Text style={styles.buttonText}>Adicionar Criança</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
    fundoCrianca: {
        backgroundColor: 'rgba(29,174,255,0.2)',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: 375
    },
    textInputCrianca: {
        width: 340,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 60,
        marginBottom: 10,
    },

    pickerComponent:{

    },
    sexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sexButton: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(29,174,255,0.2)',
    },
    selectedSexButton: {
        backgroundColor: 'rgba(29,174,255,0.5)',
    },
    sexButtonText: {
        fontSize: 18,
        fontFamily: 'Inder_400Regular',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    updateButton: {
        backgroundColor: color.azulClaro,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%',
    },
    cancelButton: {
        backgroundColor: '#FF6961',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%',
    },
    addButton: {
        backgroundColor: color.azulPadrao,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 60,
        width: 300,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Inder_400Regular'
    },
    criancaContainer: {
        marginBottom: 20,
    },
    resumoCrianca: {
        backgroundColor: 'rgba(29,174,255,0.2)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        width: 375
    },
    textoResumo: {
        fontFamily: 'Inder_400Regular',
        fontSize: 16,
        marginBottom: 5,
    },
    removeButton: {
        alignItems: 'flex-end',
        marginBottom: 10
    }
});
