import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebaseConfig';
import Post from '../info/post';

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const firestore = getFirestore();
const auth = getAuth();

export default function CategoryScreen({ route, navigation }) {
    const { categoria, categoriaText, subcategorias } = route.params; // Obtém a categoria e subcategorias passadas como parâmetros
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const [fontsLoaded] = useFonts({ Inder_400Regular });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let q;
                if (selectedSubcategory) {
                    q = query(collection(firestore, 'posts'), where('categoria', '==', categoria), where('subcategoria', '==', selectedSubcategory));
                } else {
                    q = query(collection(firestore, 'posts'), where('categoria', '==', categoria));
                }

                const querySnapshot = await getDocs(q);
                const postsArray = [];

                querySnapshot.forEach((doc) => {
                    postsArray.push({
                        ...doc.data(),
                        key: doc.id,
                    });
                });

                setPosts(postsArray);
            } catch (err) {
                console.error('Erro ao carregar posts da categoria:', err);
                setError('Erro ao carregar posts.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [categoria, selectedSubcategory]);

    const handleSavePost = async (post) => {
        const userId = auth.currentUser.uid;
        const postRef = doc(firestore, 'users', userId, 'favorites', post.key);

        try {
            await setDoc(postRef, { postId: post.key });
            Alert.alert('Post salvo!', 'O post foi salvo na sua lista de favoritos.');
        } catch (error) {
            console.error('Erro ao salvar post:', error);
            Alert.alert('Erro', 'Não foi possível salvar o post.');
        }
    };

    const renderPostItem = ({ item }) => (
        <View style={styles.postContainer}>
            <Post post={item} navigation={navigation} />
            <TouchableOpacity onPress={() => handleSavePost(item)}>
            </TouchableOpacity>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    if (posts.length === 0) {
        return <Text>Nenhum post encontrado para esta categoria.</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <Image source={require('../../img/menu.png')} style={styles.menuImage} />
            <View style={styles.container}>
                <Text style={styles.titulo}>{categoria}</Text>
                <View style={styles.borderView}></View>
                <View style={styles.contentResumo}>
                    <Text style={styles.resumo}>{categoriaText}</Text>
                </View>

                {/* Carrossel Horizontal de Subcategorias com o botão "Todos os Posts" no início */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carouselContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setSelectedSubcategory(null)}
                    >
                        <Text style={styles.buttonText}>Todos os Posts</Text>
                    </TouchableOpacity>

                    {subcategorias && subcategorias.map((subcat, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => setSelectedSubcategory(subcat)}
                        >
                            <Text style={styles.buttonText}>{subcat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.container}>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    menuImage: {
        top: 0,
        width: '100%',
        height: 109,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#81B1FA',
        marginTop: 31,
    },
    contentResumo: {
        borderColor: '#81B1FA',
        margin: 30,
        borderWidth: 2,
        borderRadius: 15,
    },
    resumo: {
        margin: 15,
        fontSize: 15,
        textAlign: 'center',
    },
    borderView: {
        borderWidth: 1,
        borderColor: '#81B1FA',
        backgroundColor: '#81B1FA',
        borderRadius: 10,
        width: 143,
        marginTop: 10,
    },
    carouselContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#81B1FA',
        height: 38,
        width: 148,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
    postContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    saveButtonText: {
        color: '#1E90FF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
