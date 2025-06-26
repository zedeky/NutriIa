import { doc, getDoc } from 'firebase/firestore';
import { db } from '../app/config/firebase';

export const buscarMetas = async (userId: string) => {
  const docRef = doc(db, 'usuarios', userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().metas;
  } else {
    throw new Error('Metas não encontradas.');
  }
};
