import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './WelcomeScreen.styles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja Bem Vindo!</Text>




      <Text style={styles.brand}>ianutri+</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.continueText}>Continue</Text>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
