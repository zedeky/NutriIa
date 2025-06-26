import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext'; // se houver
import { getUserData } from '@/utils/getUserData';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './perfil.styles.';

export default function PerfilScreen() {
  const { user } = useAuth(); // pega userId logado
  const [perfil, setPerfil] = useState<any>(null);

  useEffect(() => {
    const fetchDados = async () => {
      if (user?.id) {
        const dados = await getUserData(user.id);
        setPerfil(dados);
      }
    };
    fetchDados();
  }, [user]);

  if (!perfil) return <Text>Carregando perfil...</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.name}>{perfil.name}</Text>
        <Text style={styles.info}>
          {perfil.idade} anos | {perfil.altura}m | {perfil.peso}kg
        </Text>

        <View style={styles.section}>
          <View style={styles.card}>
            <Ionicons name="barbell-outline" size={20} color="#000" style={styles.icon} />
            <View>
              <Text style={styles.label}>Meta</Text>
              <Text style={styles.value}>{perfil.metaPeso}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Refeições Planejadas</Text>

          {perfil.refeicoes?.map((ref: any, index: number) => (
            <View key={index} style={styles.card}>
              <Ionicons name="restaurant-outline" size={20} color="#000" style={styles.icon} />
              <View>
                <Text style={styles.label}>{ref.tipo}</Text>
                <Text style={styles.value}>{ref.descricao}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
