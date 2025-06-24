import { useRouter } from 'expo-router';
import { Bell, Home, User } from 'lucide-react-native'; // ícones exemplo
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/home')}>
        <Home size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Seu App</Text>

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => router.push('../app/screens/notificacoes/NotificacaoScreen.tsx')}>
          <Bell size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('../app/screens/PerfilScreen/PerfilScreen.tsx')}>
          <User size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#D57A8D', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  icons: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    marginRight: 16,
  },
});
