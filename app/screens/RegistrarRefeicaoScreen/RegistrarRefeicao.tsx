import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './RegistrarRefeicao.styles';

export default function RegistrarRefeicaoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.greeting}>Bom dia!</Text>
        <Text style={styles.question}>Como deseja registrar a refeição?</Text>

        <TouchableOpacity style={styles.optionCard} onPress={() => router.push('/CameraScreen')}>

          <Ionicons name="camera-outline" size={20} color="#333" />
          <View>
            <Text style={styles.optionTitle}>Automaticamente</Text>
            <Text style={styles.optionDescription}>Use a câmera do celular para tirar foto da refeição</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => router.push('/registrarManual')}
        >
          <Ionicons name="pencil-outline" size={20} color="#333" />
          <View>
            <Text style={styles.optionTitle}>Manualmente</Text>
            <Text style={styles.optionDescription}>Informe manualmente os alimentos presentes na refeição</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
