import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Stack } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { db } from '../../config/firebase';
import styles from './MetasScreen.styles';

export default function MetasScreen() {
  const { user } = useAuth();

  const [gordura, setGordura] = useState('');
  const [proteina, setProteina] = useState('');
  const [carboidrato, setCarboidrato] = useState('');
  const [metasSalvas, setMetasSalvas] = useState(false);

  const salvarMetas = async () => {
    if (!user?.id) {
      Alert.alert('Erro', 'Usuário não identificado.');
      return;
    }

    try {
      const userRef = doc(db, 'usuarios', user.id);
      await updateDoc(userRef, {
        metas: {
          gordura: Number(gordura),
          proteina: Number(proteina),
          carboidratos: Number(carboidrato),
        },
      });

      setMetasSalvas(true);
    } catch (error) {
      console.error('Erro ao atualizar metas:', error);
      Alert.alert('Erro', 'Não foi possível salvar as metas.');
    }
  };

  const fecharMensagem = () => {
    setMetasSalvas(false);
    setGordura('');
    setProteina('');
    setCarboidrato('');
  };

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
          <TextInput
            style={styles.input}
            placeholder="Insira a meta de gordura"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={gordura}
            onChangeText={setGordura}
          />

          <Text style={styles.label}>Proteína:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a meta de proteína"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={proteina}
            onChangeText={setProteina}
          />

          <Text style={styles.label}>Carboidrato:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a meta de carboidrato"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={carboidrato}
            onChangeText={setCarboidrato}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={salvarMetas}>
          <Text style={styles.loginText}>Salvar metas</Text>
        </TouchableOpacity>

        {metasSalvas && (
          <View style={{ marginTop: 20, backgroundColor: '#DFF2BF', padding: 12, borderRadius: 8 }}>
            <Text style={{ color: '#4F8A10', textAlign: 'center', fontWeight: 'bold' }}>
              ✅ Metas salvas com sucesso!
            </Text>
            <TouchableOpacity onPress={fecharMensagem} style={{ marginTop: 8 }}>
              <Text style={{ color: '#4F8A10', textAlign: 'center' }}>✖ Fechar</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
