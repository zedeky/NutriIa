import { useRouter } from 'expo-router';
import { Bell, User } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets(); // pega os espaçamentos seguros do sistema

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>

      <Text style={styles.title}>Seu App</Text>

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => router.push('/notificacoes')}>
          <Bell size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/perfil')}>
          <User size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D57A8D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
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
