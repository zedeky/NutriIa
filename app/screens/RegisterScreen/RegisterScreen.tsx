import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackSvg from '../../../components/public/BackSvg.svg';
import { db } from '../../config/firebase';
import styles from './RegisterScreen.styles';

export default function RegisterScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRegister = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'usuarios'), {
        name: nome,
        email,
        senha,
        idade: 0,
        altura: 0,
        peso: 0,
        metas: {
          gordura: 0,
          proteina: 0,
          carboidratos: 0,
        },
      });

      console.log('Usuário cadastrado com ID:', docRef.id);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      router.replace('/screens/LoginScreens/LoginScreen');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <BackSvg style={StyleSheet.absoluteFillObject} width="100%" height="100%" opacity={0.2} />

        <Text style={styles.brand}>ianutri+</Text>

        <View style={styles.card}>
          <Text style={styles.title}>Cadastro</Text>

          {/* Nome */}
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor="#888"
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="exemplo@gmail.com"
              placeholderTextColor="#888"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Senha */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Crie sua senha"
              placeholderTextColor="#888"
              style={styles.input}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          {/* Confirmar senha */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Confirme sua senha"
              placeholderTextColor="#888"
              style={styles.input}
              secureTextEntry
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginText}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            Já possui uma conta?
            <Text
              style={styles.registerLink}
              onPress={() => router.replace('/screens/LoginScreens/LoginScreen')}
            >
              {' '}Faça login
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
