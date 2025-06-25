import Header from '@/components/Header';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './ProgressoScreen.styles';

export default function ProgressoScreen() {
  const [segment, setSegment] = useState<'diario' | 'semanal'>('diario');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Seu progresso</Text>
        </View>

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

        <View style={styles.dataCard}>
          <Text style={styles.dataLabel}>Gordura:</Text>
          <Text style={styles.dataLabel}>Proteína:</Text>
          <Text style={styles.dataLabel}>Carboidrato:</Text>
        </View>

        <View style={styles.rewardCard}>
          <Text style={styles.rewardTitle}>Recompensas</Text>
        </View>

        <Text style={styles.shareText}>📤 Compartilhar progresso</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
