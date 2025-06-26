import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../app/config/firebase';

export const buscarRefeicoes = async (userId: string) => {
  const refeicoesRef = collection(db, 'usuarios', userId, 'refeicoesPlanejadas');
  const q = query(refeicoesRef, orderBy('data', 'desc'));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as any[]; // tipagem livre por enquanto
};
