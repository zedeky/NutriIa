
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../app/config/firebase';

export const getUserData = async (userId: string) => {
  try {
    const userRef = doc(db, 'usuarios', userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.warn('Usuário não encontrado.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    return null;
  }
};
