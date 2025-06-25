import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import styles from './perfil.styles.';


export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.name}>Ana Silva</Text>
        <Text style={styles.info}>30 anos | 1,65m | 60kg</Text>

        <View style={styles.section}>
          <View style={styles.card}>
            <Ionicons name="barbell-outline" size={20} color="#000" style={styles.icon} />
            <View>
              <Text style={styles.label}>Peso</Text>
              <Text style={styles.value}>Perder 5kg</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Refeições Planejadas</Text>

          <View style={styles.card}>
            <Ionicons name="egg-outline" size={20} color="#000" style={styles.icon} />
            <View>
              <Text style={styles.label}>Café da Manhã</Text>
              <Text style={styles.value}>Omelete com espinafre</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons name="restaurant-outline" size={20} color="#000" style={styles.icon} />
            <View>
              <Text style={styles.label}>Almoço</Text>
              <Text style={styles.value}>Salada de quinoa com frango</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons name="ice-cream-outline" size={20} color="#000" style={styles.icon} />
            <View>
              <Text style={styles.label}>Lanche</Text>
              <Text style={styles.value}>Iogurte com frutas</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons name="fish-outline" size={20} color="#000" style={styles.icon} />
            <View>
              <Text style={styles.label}>Jantar</Text>
              <Text style={styles.value}>Salmão assado com legumes</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
