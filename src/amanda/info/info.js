// Info.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { getFirestore, collection, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebaseConfig';
import Post from './post';

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const firestore = getFirestore();
const auth = getAuth();

export default function Info({ navigation }) {
    const [fontsLoaded] = useFonts({ Inder_400Regular });
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(firestore, 'posts'),
            (querySnapshot) => {
                const postsArray = [];

                querySnapshot.forEach((documentSnapshot) => {
                    postsArray.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setPosts(postsArray);
                setLoading(false);
            },
            (error) => {
                console.error('Erro ao carregar posts:', error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const handleSavePost = async (post) => {
        const userId = auth.currentUser?.uid;
        if (!userId) {
            console.log('Usuário não autenticado.');
            return;
        }

        try {
            await setDoc(doc(firestore, 'cadastro', userId, 'idFav', post.key), {
                postId: post.key,
            });
            console.log('Post salvo com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar o post:', error);
        }
    };

    const renderPostItem = ({ item }) => (
        <View>
            <Post post={item} navigation={navigation} />
            <TouchableOpacity onPress={() => handleSavePost(item)}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );

    const handleCategoryPress = (category) => {
        navigation.navigate('esteriotipia', { category });
    };

    if (!fontsLoaded) {
        return <View style={styles.loadingContainer}><Text>Carregando fontes...</Text></View>;
    }

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Image source={require('../../img/menu.png')} style={styles.menuImage} />

                <View style={styles.main}>
                    <View style={styles.info}>
                        <Text style={styles.textInfo}>Informações</Text>
                    </View>
                    <Text style={styles.titulo}>Artigos</Text>
                    <View style={styles.borderView}></View>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('esteriotipia')}>
                            <Text style={styles.categoryText}>Estereotipia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('outraCategoria')}>
                            <Text style={styles.categoryText}>Outra Categoria</Text>
                        </TouchableOpacity>
                        {/* Adicione mais botões de categorias conforme necessário */}
                    </View>
                    <FlatList
                        data={posts}
                        keyExtractor={(item) => item.key}
                        renderItem={renderPostItem}
                        scrollEnabled={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    main: {
        top: 35,
        alignItems: 'center',
    },
    info: {
        width: 275,
        height: 52,
        borderWidth: 2,
        borderColor: '#81B1FA',
        borderRadius: 15,
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInfo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#81B1FA',
        fontWeight: '700',
        width: 233,
        height: 23,
    },
    titulo: {
        fontFamily: 'Inder_400Regular',
        fontSize: 24,
        fontWeight: '400',
        lineHeight: 30,
        color: '#000',
        textAlign: 'center',
        marginVertical: 10,
    },
    menuImage: {
        top: 20,
        marginLeft: 10,
        width: '100%',
        height: 109,
    },
    borderView: {
        borderWidth: 1,
        borderColor: '#81B1FA',
        backgroundColor: '#81B1FA',
        borderRadius: 10,
        width: 143,
        marginBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        color: '#007BFF',
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 20,
    },
    categoryButton: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 5,
        backgroundColor: '#E3F2FD',
    },
    categoryText: {
        fontSize: 16,
        color: '#007BFF',
    },
});