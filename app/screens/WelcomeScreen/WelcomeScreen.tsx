import BackSvg from '@/components/public/BackSvg.svg';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './WelcomeScreen.styles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* fundo total */}
      <View style={styles.backgroundWrapper}>
        <BackSvg width="100%" height="100%" preserveAspectRatio="none" />
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Seja Bem Vindo!</Text>
          <Text style={styles.brand}>ianutri+</Text>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
            <Text style={styles.continueText}>Continuar</Text>
            <Ionicons name="arrow-forward-circle-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
