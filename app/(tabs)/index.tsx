import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';

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

              {/* Botão Registrar Refeição */}
              <TouchableOpacity
                onPress={() => router.push('/registrarR')}
                style={{
                  backgroundColor: '#6FAEE6',
                  paddingVertical: 12,
                  borderRadius: 8,
                  alignItems: 'center',
                  marginBottom: 12,
                  elevation: 2,
                }}
              >
                <Text style={{ color: '#2D4B66', fontSize: 16, fontWeight: 'bold' }}>
                  ➕ Registrar refeição
                </Text>
              </TouchableOpacity>

              {/* Botão Metas Estabelecidas */}
              <TouchableOpacity
                onPress={() => router.push('/(tabs)/metas')}
                style={{
                  backgroundColor: '#6FAEE6',
                  paddingVertical: 12,
                  borderRadius: 8,
                  alignItems: 'center',
                  marginBottom: 24,
                  elevation: 2,
                }}
              >
                <Text style={{ color: '#2D4B66', fontSize: 16, fontWeight: 'bold' }}>
                  📋 Metas estabelecidas
                </Text>
              </TouchableOpacity>

              {/* Aqui virão as estatísticas depois */}
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
                Estatísticas
              </Text>
              {/* componentes visuais como gráficos, cards etc. podem vir aqui */}
            </ScrollView>
          </SafeAreaView>

  );
}
