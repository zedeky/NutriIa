import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './RegistrarRefeicao.styles';

export default function RegistrarRefeicaoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bom dia!</Text>
      <Text style={styles.question}>Como deseja registrar a refeição?</Text>

      <TouchableOpacity style={styles.optionCard} onPress={() => {/* lógica da câmera */}}>
        <Ionicons name="camera-outline" size={20} color="#333" />
        <View>
          <Text style={styles.optionTitle}>Automaticamente</Text>
          <Text style={styles.optionDescription}>Use a câmera do celular para tirar foto da refeição</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard} onPress={() => {/* lógica manual */}}>
        <Ionicons name="pencil-outline" size={20} color="#333" />
        <View>
          <Text style={styles.optionTitle}>Manualmente</Text>
          <Text style={styles.optionDescription}>Informe manualmente os alimentos presentes na refeição</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
