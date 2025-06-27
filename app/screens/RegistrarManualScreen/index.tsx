import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { salvarRefeicao } from '../../../utils/salvarRefeicao';
import styles from './registrarManual.styles';


export default function RegistrarManual() {
  const [alimentos, setAlimentos] = useState([{ nome: '', gramas: '' }]);
  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('Refeição personalizada');
  const [descricao, setDescricao] = useState('Montada manualmente');
  const [confirmado, setConfirmado] = useState(false);
  const router = useRouter();
  const { user } = useAuth();


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

  const confirmarRefeicao = async () => {
  const alimentosValidos = alimentos.filter(a => a.nome.trim() !== '');

  if (alimentosValidos.length === 0 || tipo.trim() === '') {
    Alert.alert('Erro', 'Preencha o tipo da refeição e adicione pelo menos um alimento válido.');
    return;
  }

  if (!user?.id) {
    Alert.alert('Erro', 'Usuário não identificado.');
    return;
  }

  try {
    const gramasTotais = alimentosValidos.reduce((soma, a) => soma + Number(a.gramas), 0);

    // Suponha valores médios por grama para simplificar:
    const gorduraPorGrama = 0.1;
    const proteinaPorGrama = 0.2;
    const carboidratoPorGrama = 0.3;

    const gorduras = gramasTotais * gorduraPorGrama;
    const proteinas = gramasTotais * proteinaPorGrama;
    const carboidratos = gramasTotais * carboidratoPorGrama;
    const calorias = gorduras * 9 + proteinas * 4 + carboidratos * 4;
    const agua = gramasTotais * 0.01; // Ex: 1% de água por grama


    await salvarRefeicao(user.id, {
      tipo,
      nome,
      descricao,
      calorias,
      gorduras,
      proteinas,
      carboidratos,
      agua,
      alimentos: alimentosValidos,
    });

    setConfirmado(true);
    setAlimentos([{ nome: '', gramas: '' }]);
    setTipo('');
    setNome('Refeição personalizada');
    setDescricao('Montada manualmente');
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível salvar a refeição.');
  }};


  const alimentosValidos = alimentos.filter(a => a.nome.trim() !== '');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      {confirmado && (
        <View style={styles.confirmBox}>
          <Text style={styles.confirmText}>✅ Refeição registrada com sucesso!</Text>
          <TouchableOpacity onPress={() => setConfirmado(false)}>
            <Text style={styles.closeButton}>✖</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRosa}>
          <Text style={styles.titulo}>Informe os alimentos e suas quantidades presentes na refeição</Text>
        </View>

        <View style={styles.inputCard}>
          <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Qual refeição é essa?</Text>
          <RNPickerSelect
            onValueChange={(value) => setTipo(value)}
            value={tipo}
            placeholder={{
              label: 'Selecione o tipo de refeição',
              value: '',
              color: '#999'
            }}
            items={[
              { label: 'Café da manhã', value: 'cafe_da_manha' },
              { label: 'Almoço', value: 'almoco' },
              { label: 'Lanche', value: 'lanche' },
              { label: 'Jantar', value: 'jantar' },
            ]}
            style={{
              inputIOS: styles.pickerSelectIOS,
              inputAndroid: styles.pickerSelectAndroid,
              placeholder: styles.pickerPlaceholder,
              iconContainer: styles.pickerIconContainer,
            }}
          />

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

        {alimentosValidos.length > 0 && (
          <View style={styles.estimativasBox}>
            <Text style={styles.estimativa}>Gordura total estimada: {alimentosValidos.length * 5}g</Text>
            <Text style={styles.estimativa}>Proteína total estimada: {alimentosValidos.length * 8}g</Text>
            <Text style={styles.estimativa}>Carboidrato total estimado: {alimentosValidos.length * 10}g</Text>
          </View>
        )}

        <TouchableOpacity style={styles.confirmar} onPress={confirmarRefeicao}>
          <Text style={styles.confirmarTexto}>Confirmar refeição</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelar} onPress={() => router.back()}>
          <Text style={styles.cancelarTexto}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
