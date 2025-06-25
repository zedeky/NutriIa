import Header from '@/components/Header'; // Import do Header padrão
import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './MetasScreen.styles';

export default function MetasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Metas estabelecidas</Text>

        <View style={styles.tabGroup}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>Diária</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Semanal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Gordura:</Text>
          <TextInput style={styles.input} placeholder="Insira a meta de gordura" placeholderTextColor="#888" />

          <Text style={styles.label}>Proteína:</Text>
          <TextInput style={styles.input} placeholder="Insira a meta de proteína" placeholderTextColor="#888" />

          <Text style={styles.label}>Carboidrato:</Text>
          <TextInput style={styles.input} placeholder="Insira a meta de carboidrato" placeholderTextColor="#888" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
