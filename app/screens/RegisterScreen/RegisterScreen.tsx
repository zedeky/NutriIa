import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './RegisterScreen.styles';


export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.brand}>ianutri+</Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

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
            placeholder="Insira sua senha"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry
          />
        </View>

        {/* Opções */}
        <View style={styles.options}>
          <View style={styles.checkboxContainer}>
            <Ionicons name="checkbox-outline" size={16} color="#888" />
            <Text style={styles.optionText}>Lembrar senha</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Botão login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Cadastro */}
        <Text style={styles.registerText}>
          Ainda não possui uma conta?
          <Text style={styles.registerLink} onPress={() => router.push('/screens/RegisterScreen/RegisterScreen')}>
            {' '}Cadastre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}
