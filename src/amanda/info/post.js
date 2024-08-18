// Post.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

export default function Post({ post, navigation }) {
    const [expanded, setExpanded] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSavePost = async () => {
        const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
        const postRef = doc(db, 'cadastro', userId, 'idFav', post.id); // Referência ao documento do post na subcoleção idFav

        try {
            await setDoc(postRef, { postId: post.id });
            setSaved(true);
            Alert.alert('Post salvo!', 'O post foi salvo na sua lista de favoritos.');
        } catch (error) {
            console.error('Erro ao salvar post:', error);
            Alert.alert('Erro', 'Não foi possível salvar o post.');
        }
    };

    if (!post) {
        return <Text>Post não encontrado</Text>;
    }

    return (
        <View>
            <TouchableOpacity
            style={styles.postContainer}
            onPress={() => navigation.navigate('details', { postId: post.key })}
        >
                <View style={styles.postContainer}>
                    {post.imageURL ? (
                        <Image source={{ uri: post.imageURL }} style={styles.postImage} />
                    ) : null}
                    <Text style={styles.postTitle}>{post.titulo}</Text>
                    {expanded && (
                        <>
                            <Text style={styles.postContent}>{post.conteudo}</Text>
                            <Text style={styles.postCategory}>{post.categoria}</Text>
                            <Text style={styles.postAuthor}>{post.autor}</Text>
                        </>
                    )}
                    <TouchableOpacity 
                        style={styles.saveButton} 
                        onPress={handleSavePost}
                        disabled={saved}
                    >
                        <Text style={styles.saveButtonText}>{saved ? 'Post Salvo' : 'Salvar Post'}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    postImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    postContent: {
        fontSize: 16,
        marginBottom: 5,
    },
    postCategory: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    postAuthor: {
        fontSize: 14,
        color: '#888',
    },
    saveButton: {
        marginTop: 10,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});