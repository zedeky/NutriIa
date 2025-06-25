import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Redireciona para login se não estiver carregando e o usuário não existir
    if (!loading && !user) {
      router.replace('/screens/LoginScreens/LoginScreen');
    }
  }, [loading, user]);

  if (loading || !user) {
    return <Text style={{ marginTop: 50, textAlign: 'center' }}>Redirecionando...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          Bom dia, {user.name}!
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 24 }}>Como podemos ajudar?</Text>

        {/* Botões, estatísticas, etc. */}
      </ScrollView>
    </SafeAreaView>
  );
}
