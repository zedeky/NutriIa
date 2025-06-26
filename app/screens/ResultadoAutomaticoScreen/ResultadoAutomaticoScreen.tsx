import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { salvarRefeicao } from '@/utils/salvarRefeicao';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, Alert, Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './ResultadoAutomaticoScreen.styles';

export default function ResultadoAutomaticoScreen() {
  const { photoUri } = useLocalSearchParams();
  const [carregando, setCarregando] = useState(true);
  const [resultado, setResultado] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const enviarFotoParaApi = async () => {
      try {
        const formData = new FormData();
        formData.append('file', {
          uri: photoUri as string,
          type: 'image/jpeg',
          name: 'refeicao.jpg',
        } as any);

        const response = await fetch('http://localhost:3000/api/food/segmentation', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        const data = await response.json();
        setResultado(data);
      } catch (error) {
        console.error('Erro ao enviar imagem:', error);
      } finally {
        setCarregando(false);
      }
    };

    enviarFotoParaApi();
  }, [photoUri]);
const { user } = useAuth();

const confirmarRefeicao = async () => {
  if (!resultado || !user?.id) {
    Alert.alert('Erro', 'Dados da refeição ou usuário ausentes.');
    return;
  }

  try {
    const { proteins, fats, carbohydrates, calories } = resultado;
    const ingredientes = resultado.ingredients.map((i: any) => i.name).join(', ');

    await salvarRefeicao({
      tipo: 'automático',
      nome: 'Refeição por foto',
      descricao: `Detectado: ${ingredientes}`,
      calorias: calories ?? (fats * 9 + proteins * 4 + carbohydrates * 4),
      gorduras: fats,
      proteinas: proteins,
      carboidratos: carbohydrates,
      agua: 0,
    });

    Alert.alert('Sucesso', 'Refeição registrada com sucesso!');
    router.push('/'); // ou redirecione para Histórico, Home etc.
  } catch (error) {
    Alert.alert('Erro', 'Falha ao registrar refeição.');
    console.error(error);
  }
};

  if (carregando) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.alimentosLabel}>Analisando imagem...</Text>
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <Image source={{ uri: photoUri as string }} style={styles.image} />

      {resultado && (
        <View style={styles.resultContainer}>
          <View style={styles.macrosContainer}>
            <View style={styles.macroCircle}>
              <Text>{resultado.fats}g{"\n"}Gordura</Text>
            </View>
            <View style={styles.macroCircle}>
              <Text>{resultado.proteins}g{"\n"}Proteína</Text>
            </View>
            <View style={styles.macroCircle}>
              <Text>{resultado.carbohydrates}g{"\n"}Carbo</Text>
            </View>
          </View>

          <View style={styles.alimentosBox}>
            <Text style={styles.alimentosLabel}>Alimentos identificados:</Text>
            <Text style={styles.alimentosText}>
              {resultado.ingredients.map((ing: any) => ing.name).join('; ')}
            </Text>
          </View>

        <TouchableOpacity style={styles.confirmButton} onPress={confirmarRefeicao}>
          <Text style={styles.confirmButtonText}>Confirmar refeição</Text>
        </TouchableOpacity>


          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
