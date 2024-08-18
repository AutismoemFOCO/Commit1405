import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getFirestore, collection, query, getDocs, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

export default function FavoritesScreen() {
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

            const q = query(collection(db, 'cadastro', userId, 'idFav'));

            try {
                const querySnapshot = await getDocs(q);
                const favoriteIds = querySnapshot.docs.map(doc => doc.data().postId).filter(id => id);

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
                            console.error('Erro ao buscar post com ID ${id}:', error);
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

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Text style={styles.postTitle}>{item.titulo}</Text>
                        <Text style={styles.postContent}>{item.conteudo}</Text>
                            <Text style={styles.postCategory}>{item.categoria}</Text>
                            <Text style={styles.postAuthor}>{item.autor}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    postContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});