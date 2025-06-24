import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BackSvg from '../../../components/public/BackSvg.svg';
import styles from './LoginScreen.styles';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <>
        
        <View style={styles.container}>
          <Stack.Screen options={{ headerShown: false }} />
         <BackSvg style={StyleSheet.absoluteFillObject} width="100%" height="100%" opacity={0.2} />

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
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={18} color="#888" style={styles.icon} />
              <TextInput
                placeholder="Insira sua senha"
                placeholderTextColor="#888"
                style={styles.input}
                secureTextEntry
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

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => router.replace('/(tabs)')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
              Ainda não possui uma conta?
              <Text style={styles.registerLink} onPress={() => router.push('/screens/RegisterScreen/RegisterScreen')}>
                {' '}Cadastre-se
              </Text>
            </Text>
          </View>
        </View>
    </>
  );
}
