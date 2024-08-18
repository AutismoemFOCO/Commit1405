// fetchPosts.js
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase/firebaseConfig'; // Ajuste o caminho conforme sua estrutura
import { initializeApp, getApps } from 'firebase/app';

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const db = getFirestore();

export const fetchPosts = async () => {
    try {
        const postsRef = collection(db, 'posts');
        const snapshot = await getDocs(postsRef);
        const postsArray = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return postsArray;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};
