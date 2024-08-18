import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

const db = getFirestore();
const auth = getAuth();

export default function Post({ post, navigation, onPress }) {
    const [fontsLoaded] = useFonts({ Inder_400Regular });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const checkIfSaved = async () => {
            if (!post || !post.id) return; // Adiciona verificação para garantir que post e post.id não sejam undefined

            const userId = auth.currentUser?.uid;
            if (!userId) return; // Verifica se o userId está disponível

            const postRef = doc(db, 'cadastro', userId, 'idFav', post.id);
            try {
                const docSnap = await getDoc(postRef);
                setSaved(docSnap.exists());
            } catch (error) {
                console.error('Erro ao verificar o post salvo:', error);
            }
        };

        checkIfSaved();
    }, [post]);

    const handleSavePost = async () => {
        if (!post || !post.id) return; // Adiciona verificação para garantir que post e post.id não sejam undefined

        const userId = auth.currentUser?.uid;
        if (!userId) return;

        const postRef = doc(db, 'cadastro', userId, 'idFav', post.id);

        try {
            await setDoc(postRef, { postId: post.id });
            setSaved(true);
            Alert.alert('Post salvo!', 'O post foi salvo na sua lista de favoritos.');
        } catch (error) {
            console.error('Erro ao salvar post:', error);
            Alert.alert('Erro', 'Não foi possível salvar o post.');
        }
    };

    const handleUnsavePost = async () => {
        if (!post || !post.id) return;

        const userId = auth.currentUser?.uid;
        if (!userId) return;

        const postRef = doc(db, 'cadastro', userId, 'idFav', post.id);

        try {
            await deleteDoc(postRef);
            setSaved(false);
            Alert.alert('Post removido!', 'O post foi removido da sua lista de favoritos.');
        } catch (error) {
            console.error('Erro ao remover post:', error);
            Alert.alert('Erro', 'Não foi possível remover o post.');
        }
    };

    if (!post) {
        return <Text>Post não encontrado</Text>;
    }

    if (!fontsLoaded) {
        return <View style={styles.loadingContainer}><Text>Carregando fontes...</Text></View>;
    }

    return (
        <View style={styles.postContainer}>
            <TouchableOpacity
                style={styles.postContent}
                onPress={() => navigation.navigate('details', { postId: post.key })}
            >
                <View style={styles.postBorder} />
                <Text style={styles.postCategoria}>#{post.categoria}</Text>
                {post.imageURL && <Image source={{ uri: post.imageURL }} style={styles.postImage} />}
                <Text style={styles.postTitle}>{post.titulo}</Text>
                <Text style={styles.postData}>{post.data}</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btnSalvar}
                    onPress={saved ? handleUnsavePost : handleSavePost}
                >
                    <Ionicons
                        name={saved ? 'bookmark' : 'bookmark-outline'}
                        size={35}
                        color={saved ? '#61A0FF' : '#61A0FF'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCompart}
                    onPress={() => {/* Adicione sua lógica de compartilhamento aqui */}}
                >
                    <Entypo name="share" size={35} color="#61A0FF" style={{right: 30}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        width: '100%',
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginBottom: 20,
    },
    postImage: {
        width: '100%',
        height: 200,
    },
    postTitle: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    postData: {
        fontSize: 14,
        color: '#C3BCBC',
        marginLeft: 10,
    },
    postCategoria: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: '900',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnSalvar: {
        marginLeft: 270,
    },
    btnCompart: {
        marginLeft: 10,
    },
    postBorder: {
        borderWidth: 3,
        borderColor: '#E4EEFB',
        backgroundColor: '#E4EEFB',
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
    },
    postContent: {
        paddingHorizontal: 10,
    },
});