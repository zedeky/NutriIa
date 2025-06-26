import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { buscarRefeicoes } from '@/utils/buscarRefeicoes';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './HistoricoScreen.styles';

export default function HistoricoScreen() {
  const { user } = useAuth();
  const [historico, setHistorico] = useState<{ [dia: string]: any[] }>({});
  const [diasDisponiveis, setDiasDisponiveis] = useState<string[]>([]);
  const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);

  useEffect(() => {
    const carregar = async () => {
      if (!user?.id) return;

      const refeicoes = await buscarRefeicoes(user.id);

      const agrupadoPorData: { [data: string]: any[] } = {};

      refeicoes.forEach(ref => {
        const dia = new Date(ref.data).toLocaleDateString('pt-BR');
        if (!agrupadoPorData[dia]) agrupadoPorData[dia] = [];
        agrupadoPorData[dia].push(ref);
      });

      const dias = Object.keys(agrupadoPorData).sort((a, b) => {
        const [d1, m1, y1] = a.split('/');
        const [d2, m2, y2] = b.split('/');
        return new Date(`${y2}-${m2}-${d2}`).getTime() - new Date(`${y1}-${m1}-${d1}`).getTime();
      });

      setHistorico(agrupadoPorData);
      setDiasDisponiveis(dias);
      setDiaSelecionado(dias[0] ?? null); // seleciona o mais recente
    };

    carregar();
  }, [user]);

  const irParaDiaAnterior = () => {
    const indexAtual = diasDisponiveis.indexOf(diaSelecionado ?? '');
    if (indexAtual < diasDisponiveis.length - 1) {
      setDiaSelecionado(diasDisponiveis[indexAtual + 1]);
    }
  };

  const irParaProximoDia = () => {
    const indexAtual = diasDisponiveis.indexOf(diaSelecionado ?? '');
    if (indexAtual > 0) {
      setDiaSelecionado(diasDisponiveis[indexAtual - 1]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Seu histórico</Text>

        {/* Botões de navegação entre dias */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <TouchableOpacity onPress={irParaDiaAnterior}>
            <Text style={{ fontSize: 16, color: '#007bff' }}>← Dia anterior</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{diaSelecionado}</Text>

          <TouchableOpacity onPress={irParaProximoDia}>
            <Text style={{ fontSize: 16, color: '#007bff' }}>Próximo dia →</Text>
          </TouchableOpacity>
        </View>

        {/* Botões de dias */}
        <View style={styles.daysContainer}>
          {diasDisponiveis.map((dia, index) => (
            <TouchableOpacity key={index} onPress={() => setDiaSelecionado(dia)}>
              <Text
                style={[
                  styles.dayButton,
                  dia === diaSelecionado && styles.dayButtonActive,
                ]}
              >
                {dia.slice(0, 5)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Refeições do dia selecionado */}
        {diaSelecionado &&
          historico[diaSelecionado]?.map((refeicao, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={
                  refeicao.tipo.toLowerCase().includes('café')
                    ? require('../../../components/public/i1.png')
                    : refeicao.tipo.toLowerCase().includes('jantar')
                    ? require('../../../components/public/i3.png')
                    : require('../../../components/public/i2.png')
                }
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{refeicao.tipo}</Text>
                <Text style={styles.cardText}>Gordura: {refeicao.gorduras.toFixed(1)}g</Text>
                <Text style={styles.cardText}>Proteína: {refeicao.proteinas.toFixed(1)}g</Text>
                <Text style={styles.cardText}>Carboidrato: {refeicao.carboidratos.toFixed(1)}g</Text>
                <Text style={styles.cardText}>Alimentos:</Text>
                {refeicao.alimentos?.map((a: any, idx: number) => (
                  <Text key={idx} style={{ marginLeft: 10 }}>
                    - {a.nome} ({a.gramas}g)
                  </Text>
                ))}
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
