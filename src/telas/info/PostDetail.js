import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Linking, ActivityIndicator, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { getAuth } from 'firebase/auth'; 

if (!getApps().length) {
    initializeApp(firebaseConfig);
}
const auth = getAuth();
const firestore = getFirestore();

export default function PostDetails({ route }) {
    const { postId } = route.params;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saved, setSaved] = useState(false);

    const handlePress = () => {
        const url = post.linkdoartigo;
        Linking.openURL(url).catch(err => console.error('Erro ao abrir o link', err));
    };

    const handleSavePost = async () => {
        const userId = auth.currentUser.uid; 
        const postRef = doc(firestore, 'cadastro', userId, 'idFav', post.id); 
        try {
            await setDoc(postRef, { postId: post.id });
            setSaved(true);
            Alert.alert('Post salvo!', 'O post foi salvo na sua lista de favoritos.');
        } catch (error) {
            console.error('Erro ao salvar post:', error);
            Alert.alert('Erro', 'Não foi possível salvar o post.');
        }
    };

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
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Image source={require('../../img/menu.png')} style={styles.menuImage} />

                <View style={styles.main}>
                    <Text style={styles.categoria}>#{post.categoria}</Text>

                    {post.imageURL && <Image source={{ uri: post.imageURL }} style={styles.image} />}
                    <Text style={styles.fontImage}>Fonte: {post.fontIMGcapa}</Text>

                    <Text style={styles.title}>{post.titulo}</Text>
                    <Text style={styles.autor}>Autor(a): {post.autor}</Text>
                    <Text style={styles.data}>Publicado em: {post.data}</Text>

                    <View style={styles.contentBorder}></View>

                    <Text style={styles.contentTitulo}>Objetivo do estudo:</Text>
                    <Text style={styles.content}>   {post.objetivo}</Text>

                    <Text style={styles.contentTitulo}>Método:</Text>
                    <Text style={styles.content}>   {post.metodo}</Text>


                    <Text style={styles.contentTitulo}>Desenvolvimento:</Text>
                    <Text style={styles.content}>   {post.conteudo}</Text>

                    {post.imagem && <Image source={{ uri: post.imagem }} style={styles.image} />}
                    <Text style={styles.fontImage}>Fonte: {post.fontIMG}</Text>
                    
                    <Text style={styles.contentTitulo}>Conclusão:</Text>
                    <Text style={styles.content}>   {post.conclusao}</Text>

                    <View style={styles.contentBorder}></View>


                {/* Botões */}
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnSalvar} onPress={handleSavePost} disabled={saved}>
                            <Ionicons name="bookmark" size={35} color={'#81B1FA'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCompart} onPress={() => {/* Função de compartilhamento */}}>
                            <Entypo name="share" size={35} color="#81B1FA" />
                        </TouchableOpacity>
                        </View>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text style={styles.btnArtigo}>Ler artigo completo</Text>
                        </TouchableOpacity>


                    <Text style={styles.saveButtonText}>{saved ? 'Post Salvo' : 'Salvar Post'}</Text>


                    {/* Palavras do Glossário */}
                    <Text style={styles.tituloGlossario}>Glossário</Text>
                    <View style={styles.borderView}></View>


                    <Text style={styles.contentTitulo}>{post.palavra1}</Text>
                    <Text style={styles.content}>{post.significado1}</Text>

                    <Text style={styles.contentTitulo}>{post.palavra2}</Text>
                    <Text style={styles.content}>{post.significado2}</Text>

                    <Text style={styles.contentTitulo}>{post.palavra3}</Text>
                    <Text style={styles.content}>{post.significado3}</Text>

                    <Text style={styles.contentTitulo}>{post.palavra4}</Text>
                    <Text style={styles.content}>{post.significado4}</Text>

                    <Text style={styles.contentTitulo}>{post.palavra5}</Text>
                    <Text style={styles.content}>{post.significado5}</Text>

                    <Text style={styles.contentTitulo}>{post.palavra6}</Text>
                    <Text style={styles.content}>{post.significado6}</Text>
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
        padding: 16,
        margin: 10,
        top: 3,
        borderWidth: 2,
        borderColor: '#81B1FA',
        borderRadius: 15,
        marginVertical: 40,
    },
    menuImage: {
        top: 20,
        marginLeft: 10,
        width: '100%',
        height: 109,
    },
    categoria: {
        fontSize: 14,
        color: '#000',
        marginLeft: -2,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    autor: {
        fontSize: 13,
        color: '#555454',
        marginLeft: 20,
    },
    data: {
        fontSize: 13,
        color: '#555454',
        marginLeft: 20,
        marginBottom: 20,
    },
    fontImage: {
        fontSize: 13,
        color: '#D9D9D9',
        marginLeft: 20,
        marginBottom:10,
    },
    contentBorder: {
        width: 325,
        height: 6,
        backgroundColor: '#96C0FF',
        marginLeft: 2,
        borderRadius: 5,
        marginBottom: 20,
    },
    contentTitulo: {
        color: "#81B1FA",
        fontSize: 20,
        marginBottom: 5,
        marginTop: 15,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    content: {
        fontSize: 16,
        marginLeft: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginVertical: 16,
    },
    btnContainer:{
        marginTop:15,
        flex:1,
        flexDirection:'row'
    },
    btnSalvar: {
        marginLeft: 4,
    },
    btnCompart: {
        marginLeft: 10,
    },
    btnArtigo:{
        marginLeft:150,
        color:'#81B1FA',
        fontWeight:'bold',
        fontSize:20,
        textDecorationLine:'underline',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    tituloGlossario: {
        color: "#81B1FA",
        fontSize: 30,
        marginBottom: 5,
        marginTop: 15,
        fontWeight: 'bold',
        marginLeft: 100,
    },
    borderView: {
        borderWidth: 1,
        borderColor: '#81B1FA',
        backgroundColor: '#81B1FA',
        borderRadius: 10,
        width: 143,
        marginBottom: 25,
        marginLeft:92,
        
    },
});
