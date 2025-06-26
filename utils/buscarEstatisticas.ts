import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../app/config/firebase';

export const buscarEstatisticas = async (userId: string) => {
  const refeicoesRef = collection(db, 'usuarios', userId, 'refeicoesPlanejadas');
  const snapshot = await getDocs(refeicoesRef);

  const hoje = new Date().toLocaleDateString('pt-BR');
  let calorias = 0, agua = 0, gorduras = 0, proteinas = 0, carboidratos = 0, totalRefeicoes = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    const diaRefeicao = new Date(data.data).toLocaleDateString('pt-BR');

    if (diaRefeicao === hoje) {
      totalRefeicoes++;
      calorias += data.calorias || 0;
      agua += data.agua || 0;
      gorduras += data.gorduras || 0;
      proteinas += data.proteinas || 0;
      carboidratos += data.carboidratos || 0;
    }
  });

  // Pega metas do usuário
  const userDoc = await getDoc(doc(db, 'usuarios', userId));
  const metas = userDoc.exists() ? userDoc.data().metas : {};

  return {
    totalRefeicoes,
    calorias,
    agua,
    gorduras,
    proteinas,
    carboidratos,
    metas,
  };
};
