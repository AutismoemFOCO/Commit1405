// api.js
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

export const fetchPostById = async (postId) => {
    try {
        const docRef = doc(db, 'posts', postId); // Certifique-se de que 'posts' é o nome correto da coleção
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: postId, ...docSnap.data() };
        } else {
            throw new Error('Post não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        throw error;
    }
};
