import CircularProgress from '@/components/CircularProgress';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { buscarMetas } from '@/utils/buscarMetas';
import { buscarRefeicoes } from '@/utils/buscarRefeicoes';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [metas, setMetas] = useState({ gordura: 0, proteina: 0, carboidrato: 0 });
  const [totais, setTotais] = useState({ gordura: 0, proteina: 0, carboidrato: 0, calorias: 0, agua: 0 });
  const [qtdRefeicoes, setQtdRefeicoes] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/screens/LoginScreens/LoginScreen');
    }
  }, [loading, user]);

  useEffect(() => {
    const carregarDados = async () => {
      if (!user?.id) return;
      try {
        const metasData = await buscarMetas(user.id);
        setMetas({
          gordura: metasData.gordura || 0,
          proteina: metasData.proteina || 0,
          carboidrato: metasData.carboidratos || 0,
        });

        const refeicoes = await buscarRefeicoes(user.id);
        setQtdRefeicoes(refeicoes.length);

        const soma = refeicoes.reduce(
          (acc, r) => {
            acc.gordura += r.gorduras || 0;
            acc.proteina += r.proteinas || 0;
            acc.carboidrato += r.carboidratos || 0;
            acc.calorias += r.calorias || 0;
            acc.agua += r.agua || 0;
            return acc;
          },
          { gordura: 0, proteina: 0, carboidrato: 0, calorias: 0, agua: 0 }
        );

        setTotais(soma);
      } catch (e) {
        console.error('Erro ao carregar estatísticas:', e);
      }
    };

    carregarDados();
  }, [user]);

  if (loading || !user) {
    return <Text style={{ marginTop: 50, textAlign: 'center' }}>Redirecionando...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          Bom dia, {user.name}!
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 24 }}>Como podemos ajudar?</Text>

        <TouchableOpacity
          onPress={() => router.push('/registrarR')}
          style={{
            backgroundColor: '#6FAEE6',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginBottom: 12,
            elevation: 2,
          }}
        >
          <Text style={{ color: '#2D4B66', fontSize: 16, fontWeight: 'bold' }}>
            ➕ Registrar refeição
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(tabs)/metas')}
          style={{
            backgroundColor: '#6FAEE6',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginBottom: 24,
            elevation: 2,
          }}
        >
          <Text style={{ color: '#2D4B66', fontSize: 16, fontWeight: 'bold' }}>
            📋 Metas estabelecidas
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>Estatísticas</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CircularProgress
            label="gordura"
            progress={metas.gordura ? totais.gordura / metas.gordura : 0}
          />
          <CircularProgress
            label="proteína"
            progress={metas.proteina ? totais.proteina / metas.proteina : 0}
          />
          <CircularProgress
            label="carbo"
            progress={metas.carboidrato ? totais.carboidrato / metas.carboidrato : 0}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
