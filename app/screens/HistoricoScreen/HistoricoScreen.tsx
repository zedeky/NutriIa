import Header from '@/components/Header';
import { Stack } from 'expo-router';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './HistoricoScreen.styles';

export default function HistoricoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Seu histórico</Text>

        {/* Dias da semana */}
        <View style={styles.daysContainer}>
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((dia, index) => (
            <Text key={index} style={[styles.dayButton, index === 0 && styles.dayButtonActive]}>
              {dia}
            </Text>
          ))}
        </View>

        {/* Cartões das refeições */}
        <View style={styles.card}>
          <Image source={require('../../../components/public/i1.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Café da manhã</Text>
            <Text style={styles.cardText}>Gordura :</Text>
            <Text style={styles.cardText}>Proteína:</Text>
            <Text style={styles.cardText}>Carboidrato:</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('../../../components/public/i2.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Almoço</Text>
            <Text style={styles.cardText}>Gordura :</Text>
            <Text style={styles.cardText}>Proteína:</Text>
            <Text style={styles.cardText}>Carboidrato:</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('../../../components/public/i3.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Jantar</Text>
            <Text style={styles.cardText}>Gordura :</Text>
            <Text style={styles.cardText}>Proteína:</Text>
            <Text style={styles.cardText}>Carboidrato:</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
