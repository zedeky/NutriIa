import Header from '@/components/Header';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './ResultadoAutomaticoScreen.styles';

export default function ResultadoAutomaticoScreen() {
  const { photoUri } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <Image source={{ uri: photoUri as string }} style={styles.image} />

      <View style={styles.resultContainer}>
        <View style={styles.macrosContainer}>
          <View style={styles.macroCircle}><Text>8g{"\n"}Gordura</Text></View>
          <View style={styles.macroCircle}><Text>86g{"\n"}Proteína</Text></View>
          <View style={styles.macroCircle}><Text>86g{"\n"}Carbo</Text></View>
        </View>

        <View style={styles.alimentosBox}>
          <Text style={styles.alimentosLabel}>Alimentos identificados:</Text>
          <Text style={styles.alimentosText}>Frango; Feijão; Peito de frango</Text>
        </View>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar refeição</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
