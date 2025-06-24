import { Stack } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './HistoricoScreen.styles';


export default function HistoricoScreen() {
  return (
    <ScrollView style={styles.container}>
       <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Seu histórico</Text>

      {/* Dias da semana */}
      <View style={styles.daysContainer}>
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((dia, index) => {
          return (
            <Text key={index} style={[styles.dayButton, index === 0 && styles.dayButtonActive]}>
              {dia}
            </Text>
          );
        })}
      </View>

      {/* Cartões das refeições */}
      <View style={styles.card}>
        <Image source={require('/home/ivf_9/Documentos/NutriIaReact/components/public/i1.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Café da manhã</Text>
          <Text style={styles.cardText}>Gordura :</Text>
          <Text style={styles.cardText}>Proteína:</Text>
          <Text style={styles.cardText}>Carboidrato:</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('/home/ivf_9/Documentos/NutriIaReact/components/public/i2.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Almoço</Text>
          <Text style={styles.cardText}>Gordura :</Text>
          <Text style={styles.cardText}>Proteína:</Text>
          <Text style={styles.cardText}>Carboidrato:</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('/home/ivf_9/Documentos/NutriIaReact/components/public/i3.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Jantar</Text>
          <Text style={styles.cardText}>Gordura :</Text>
          <Text style={styles.cardText}>Proteína:</Text>
          <Text style={styles.cardText}>Carboidrato:</Text>
        </View>
      </View>
    </ScrollView>
  );
}
