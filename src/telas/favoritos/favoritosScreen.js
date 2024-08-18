import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, StatusBar, Image, ScrollView } from 'react-native';
import { getFirestore, collection, query, getDocs, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Post from '../info/post'; // Certifique-se de que o caminho para o componente Post está correto

const db = getFirestore();
const auth = getAuth();

const color = {
    azulPadrao: '#81B1FA',
    azulClaro: '#96C0FF',
    azulCaneta: '#2C78E9',
    azulEscuro: '#073F62'
};

export default function FavoritesScreen({ navigation }) {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPostById = async (id) => {
        try {
            const postRef = doc(db, 'posts', id);
            const postSnap = await getDoc(postRef);
            return postSnap.exists() ? { id: postSnap.id, ...postSnap.data() } : null;
        } catch (err) {
            console.error('Erro ao buscar post:', err);
            throw err;
        }
    };

    useEffect(() => {
        const loadFavorites = async () => {
            const userId = auth.currentUser?.uid;
            if (!userId) {
                setError('Usuário não autenticado.');
                setLoading(false);
                return;
            }

            try {
                const favoritesQuery = query(collection(db, 'cadastro', userId, 'idFav'));
                const querySnapshot = await getDocs(favoritesQuery);

                const favoriteIds = querySnapshot.docs.map(doc => doc.id);

                if (favoriteIds.length === 0) {
                    setLoading(false);
                    return;
                }

                const posts = await Promise.all(
                    favoriteIds.map(async id => {
                        try {
                            const post = await fetchPostById(id);
                            return post;
                        } catch (err) {
                            console.error(`Erro ao buscar post com ID ${id}:`, err);
                            return null;
                        }
                    })
                );

                const validPosts = posts.filter(post => post !== null);
                setFavorites(validPosts);
            } catch (error) {
                console.error('Erro ao carregar favoritos:', error);
                setError('Erro ao carregar favoritos.');
            } finally {
                setLoading(false);
            }
        };

        loadFavorites();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    if (favorites.length === 0) {
        return <Text>Nenhum post salvo.</Text>;
    }

    const renderPostItem = ({ item }) => (
        <View style={styles.postContainer}>
            <Post post={item} navigation={navigation} />
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />

            <Image source={require('../../img/menu.png')} style={styles.menuImage} />

            <View style={styles.title}>
                <Text style={styles.textTitle}>Artigos Favoritos</Text>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                    Todos os artigos que você favoritar estarão armazenados na tela de favoritos. Assim, você poderá acessá-los facilmente sempre que precisar.
                </Text>
            </View>

            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={renderPostItem}
                scrollEnabled={false}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    menuImage: {
        width: '100%',
        height: 109,
        zIndex: -2,
    },
    title: {
        width: 275,
        height: 52,
        borderWidth: 2,
        borderColor: color.azulPadrao,
        borderRadius: 15,
        padding: 10,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.azulPadrao,
    },
    infoBox: {
        width: '90%',
        borderWidth: 2,
        borderColor: color.azulClaro,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 15,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 15,
        color: '#686868',
        textAlign: 'justify',
    },

    postContainer: {
        pointerEvents: 'none', // Desativa a interatividade do post
    },
});
