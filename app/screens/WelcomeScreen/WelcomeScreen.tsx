import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackSvg from '../../../components/public/BackSvg.svg';
import styles from './WelcomeScreen.styles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (

    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <BackSvg style={StyleSheet.absoluteFillObject} width="100%" height="100%" opacity={0.2} />

      <Text style={styles.title}>Seja Bem Vindo!</Text>
      <Text style={styles.brand}>ianutri+</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.continueText}>Continue</Text>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>

  );
}
