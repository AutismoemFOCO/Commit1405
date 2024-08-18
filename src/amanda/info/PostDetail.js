import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig' // Ajuste o caminho conforme sua estrutura

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const firestore = getFirestore();

export default function PostDetails({ route }) {
    const { postId } = route.params;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const postRef = doc(firestore, 'posts', postId);
                const postSnap = await getDoc(postRef);

                if (postSnap.exists()) {
                    setPost(postSnap.data());
                } else {
                    console.log('Nenhum post encontrado!');
                }
            } catch (error) {
                console.error('Erro ao buscar detalhes do post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPostDetails();
    }, [postId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!post) {
        return <Text>Post não encontrado</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.titulo}</Text>
            <Text style={styles.content}>{post.conteudo}</Text>
            {post.imageURL && <Image source={{ uri: post.imageURL }} style={styles.image} />}
            <Text style={styles.title}>{post.titulo}</Text>
            <Text style={styles.content}>{post.conteudo}</Text>
            <Text style={styles.title}>{post.titulo}</Text>
            <Text style={styles.content}>{post.conteudo}</Text>
            
            {/* Outros detalhes do post */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginVertical: 16,
    },
});
