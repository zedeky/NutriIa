import { addDoc, collection, doc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { db } from '../app/config/firebase';

type Refeicao = {
  tipo: string;
  nome: string;
  descricao: string;
  calorias: number;
  gorduras: number;
  proteinas: number;
  carboidratos: number;
  agua: number;
  alimentos: { nome: string; gramas: string }[];
};

export const salvarRefeicao = async (userId: string, dados: Refeicao) => {
  if (!userId) {
    Alert.alert('Erro', 'Usuário não identificado.');
    return;
  }

  try {
    // Cria referência à subcoleção: usuarios/{userId}/refeicoesPlanejadas
    const refeicoesRef = collection(doc(db, 'usuarios', userId), 'refeicoesPlanejadas');

    await addDoc(refeicoesRef, {
      ...dados,
      data: new Date().toISOString(),
    });

    console.log(`✅ Refeição salva com sucesso para o usuário ${userId}`);
  } catch (error) {
    console.error('❌ Erro ao salvar refeição:', error);
    Alert.alert('Erro', 'Falha ao salvar a refeição.');
  }
};
