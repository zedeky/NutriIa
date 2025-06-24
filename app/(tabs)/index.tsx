import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, marginTop: 16 }}>Bom dia!</Text>
      <Text style={{ fontSize: 16, marginBottom: 24 }}>Como podemos ajudar?</Text>

      <TouchableOpacity
        style={{ marginBottom: 8, backgroundColor: '#C7E0F4', padding: 12, borderRadius: 8 }}
        onPress={() => router.push('/registrarR')}
      >
        <Ionicons name="add-circle-outline" size={18} color="#555" />
        <Text>Registrar refeição</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 24, backgroundColor: '#C7E0F4', padding: 12, borderRadius: 8 }}>
        <Ionicons name="list-outline" size={18} color="#555" />
        <Text>Metas estabelecidas</Text>
      </View>

      <Text style={{ fontSize: 18, marginBottom: 16 }}>Estatísticas</Text>

      <View style={{ backgroundColor: '#D57A8D', borderRadius: 16, padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
          <Text style={{ color: '#fff' }}>3 refeições</Text>
          <Text style={{ color: '#fff' }}>1500 calorias</Text>
          <Text style={{ color: '#fff' }}>2.5L água</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', padding: 12, borderRadius: 12 }}>
          <Text style={{ color: '#E59400' }}>13g gordura</Text>
          <Text style={{ color: '#248F24' }}>86g proteína</Text>
          <Text style={{ color: '#1E90FF' }}>43g carbo</Text>
        </View>
      </View>
    </View>
  );
}
