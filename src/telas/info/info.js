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
            </TouchableOpacity>
        </View>
    );

    const handleCategoryPress = (categoria) => {
        if (categoria === 'Comportamentos') {
            navigation.navigate('Comportamentos', { categoria });
        } else if (categoria === 'Educação') {
            navigation.navigate('Educação', { categoria });
        } else if (categoria === 'Comorbidades') {
            navigation.navigate('Comorbidades', { categoria });
        } else if (categoria === 'Terapia') {
            navigation.navigate('Terapia', { categoria });
        } else if (categoria === 'Indicações') {
            navigation.navigate('Indicações', { categoria });
        } else if (categoria === 'Socialização') {
            navigation.navigate('Socialização', { categoria });
        } else if (categoria === 'Tecnologia') {
            navigation.navigate('Tecnologia', { categoria });
        }

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

                    {/*Botões de Categoria*/}

                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButtonOpC} onPress={() => handleCategoryPress('Comportamentos')}>
                            <Text style={styles.categoryTextOpC}>Comportamentos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Educação')}>
                            <Text style={styles.categoryText}>Educação</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Comorbidades')}>
                            <Text style={[styles.categoryText, { width: 200 }]}>Comorbidades</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButtonOp} onPress={() => handleCategoryPress('Terapia')}>
                            <Text style={styles.categoryTextOp}>Terapia</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButtonOp} onPress={() => handleCategoryPress('Indicações')}>
                            <Text style={styles.categoryTextOp}>Indicações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Tecnologia')}>
                            <Text style={styles.categoryText}>Tecnologia</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Posts */}
                    <Text style={styles.titulo}>Artigos</Text>
                    <View style={styles.borderView}></View>
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
        top: 5,
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
        top: 0,
        width: '100%',
        height: 109,
    },
    borderView: {
        borderWidth: 1,
        borderColor: '#81B1FA',
        backgroundColor: '#81B1FA',
        borderRadius: 10,
        width: 143,
        marginBottom: 25,

    },
    borda: {
        borderWidth: 1,
        borderColor: '#E4EEFB',
        backgroundColor: '#E4EEFB',
        borderRadius: 10,
        width: 390,

        marginTop: 27,
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
        marginBottom: 20,
        justifyContent: 'center',
    },
    categoryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#81B1FA',
        height: 38,
        width: 148,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    categoryText: {
        color: '#fff',
        fontSize: 15,
        width: 89,
        height: 30,
        fontWeight: '500',
        marginTop: 8,
        textAlign: 'center',
    },
    categoryButtonOp: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4EEFB',
        height: 38,
        width: 148,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    categoryButtonOpC: {
        justifyContent: 'center',
        backgroundColor: '#E4EEFB',
        height: 38,
        width: 148,
        paddingVertical: 12,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    categoryTextOp: {
        color: '#81B1FA',
        fontSize: 15,
        width: 100,
        height: 30,
        fontWeight: '500',
        marginTop: 8,
        textAlign: 'center',
    },
    categoryTextOpC: {
        color: '#81B1FA',
        fontSize: 15,
        width: 150,
        height: 30,
        fontWeight: '500',
        marginTop: 8,
        textAlign: 'center',
    },
});