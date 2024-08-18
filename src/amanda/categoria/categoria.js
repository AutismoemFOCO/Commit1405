// CategoryScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firestore = getFirestore();

export default function CategoryScreen({ route }) {
    const { category } = route.params; // Obtém a categoria passada como parâmetro
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(firestore, 'posts'), where('categoria', '==', category));
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
    }, [category]);

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
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Text style={styles.postTitle}>{item.titulo}</Text>
                        <Text>{item.conteudo}</Text>
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