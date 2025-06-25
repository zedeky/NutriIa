import BackSvg from '@/components/public/BackSvg.svg';
import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { db } from '../../config/firebase';
import styles from './LoginScreen.styles';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const q = query(collection(db, 'usuarios'), where('email', '==', email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        console.log('Nenhum usuário encontrado com esse email.');
        Alert.alert('Erro', 'Usuário não encontrado.');
        return;
      }

      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();

      console.log('Dados do usuário encontrados no Firestore:', userData);

      if (userData.senha !== senha) {
        console.log('Senha incorreta.');
        Alert.alert('Erro', 'Senha incorreta.');
        return;
      }

     
      await login({ id: userDoc.id, ...(userData as any) });
      console.log('Usuário salvo no contexto com sucesso!');

     
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Não foi possível fazer login.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.backgroundWrapper}>
        <BackSvg width="100%" height="100%" style={styles.backgroundSvg} />
      </View>

      <View style={styles.content}>
        <Text style={styles.brand}>ianutri+</Text>

        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="exemplo@gmail.com"
              placeholderTextColor="#888"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Insira sua senha"
              placeholderTextColor="#888"
              style={styles.input}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <View style={styles.options}>
            <View style={styles.checkboxContainer}>
              <Ionicons name="checkbox-outline" size={16} color="#888" />
              <Text style={styles.optionText}>Lembrar senha</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            Ainda não possui uma conta?
            <Text
              style={styles.registerLink}
              onPress={() => router.push('/screens/RegisterScreen/RegisterScreen')}
            >
              {' '}Cadastre-se
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
