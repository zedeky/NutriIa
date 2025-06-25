import Header from '@/components/Header';
import { Stack } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './registrarManual.styles';

export default function RegistrarManual() {
  const [alimentos, setAlimentos] = useState([{ nome: 'Feijão', gramas: '100' }]);

  const adicionarAlimento = () => {
    setAlimentos([...alimentos, { nome: '', gramas: '' }]);
  };

  const removerAlimento = (index: number) => {
    const novaLista = [...alimentos];
    novaLista.splice(index, 1);
    setAlimentos(novaLista);
  };

  const atualizarAlimento = (index: number, campo: 'nome' | 'gramas', valor: string) => {
    const novaLista = [...alimentos];
    novaLista[index][campo] = valor;
    setAlimentos(novaLista);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRosa}>
          <Text style={styles.titulo}>Informe os alimentos e suas quantidades presentes na refeição</Text>
        </View>

        {alimentos.map((alimento, index) => (
          <View key={index} style={styles.inputCard}>
            <TextInput
              placeholder="Informe o alimento"
              value={alimento.nome}
              onChangeText={(text) => atualizarAlimento(index, 'nome', text)}
              style={styles.inputNome}
              placeholderTextColor="#999"
            />
            <View style={styles.gramasWrapper}>
              <TextInput
                placeholder="0"
                value={alimento.gramas}
                onChangeText={(text) => atualizarAlimento(index, 'gramas', text)}
                style={styles.inputGramas}
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              <Text style={styles.grLabel}>g</Text>
            </View>
            <TouchableOpacity onPress={() => removerAlimento(index)}>
              <Text style={styles.remover}>✖ Remover alimento</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity onPress={adicionarAlimento}>
          <Text style={styles.adicionar}>➕ Adicionar alimento</Text>
        </TouchableOpacity>

        <View style={styles.estimativasBox}>
          <Text style={styles.estimativa}>Gordura total estimada:</Text>
          <Text style={styles.estimativa}>Proteína total estimada:</Text>
          <Text style={styles.estimativa}>Carboidrato total estimado:</Text>
        </View>

        <TouchableOpacity style={styles.confirmar}>
          <Text style={styles.confirmarTexto}>Confirmar refeição</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelar}>
          <Text style={styles.cancelarTexto}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
