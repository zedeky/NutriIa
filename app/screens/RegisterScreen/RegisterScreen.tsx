import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BackSvg from '../../../components/public/BackSvg.svg';
import styles from './RegisterScreen.styles';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <BackSvg style={StyleSheet.absoluteFillObject} width="100%" height="100%" opacity={0.2} />

        {/* Logo */}
        <Text style={styles.brand}>ianutri+</Text>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Cadastro</Text>

          {/* Nome */}
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor="#888"
              style={styles.input}
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
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Confirme sua senha"
              placeholderTextColor="#888"
              style={styles.input}
              secureTextEntry
            />
          </View>

          {/* Botão cadastro */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Cadastrar</Text>
          </TouchableOpacity>

          {/* Voltar para login */}
          <Text style={styles.registerText}>
            Já possui uma conta?
            <Text style={styles.registerLink} onPress={() => router.push('/login')}>
              {' '}Faça login
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
