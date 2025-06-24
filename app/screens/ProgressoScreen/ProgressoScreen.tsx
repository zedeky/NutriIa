import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ProgressoScreen.styles';

export default function ProgressoScreen() {
  const [segment, setSegment] = useState<'diario' | 'semanal'>('diario');

  return (
    <View style={styles.container}>
       <Stack.Screen options={{ headerShown: false }} />
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Seu progresso</Text>
      </View>

      {/* Segmento */}
      <View style={styles.segmentContainer}>
        <TouchableOpacity
          style={[styles.segmentButton, segment === 'diario' && styles.activeSegment]}
          onPress={() => setSegment('diario')}
        >
          <Text style={styles.segmentText}>Diária</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.segmentButton, segment === 'semanal' && styles.activeSegment]}
          onPress={() => setSegment('semanal')}
        >
          <Text style={styles.segmentText}>Semanal</Text>
        </TouchableOpacity>
      </View>

      {/* Cartão de dados */}
      <View style={styles.dataCard}>
        <Text style={styles.dataLabel}>Gordura:</Text>
        <Text style={styles.dataLabel}>Proteína:</Text>
        <Text style={styles.dataLabel}>Carboidrato:</Text>
      </View>

      {/* Cartão de recompensas */}
      <View style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>Recompensas</Text>
        {/* Conteúdo de recompensas aqui */}
      </View>

      <Text style={styles.shareText}>📤 Compartilhar progresso</Text>
    </View>
  );
}
