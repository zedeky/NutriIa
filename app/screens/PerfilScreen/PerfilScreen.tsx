import { Text, View } from 'react-native';
import styles from './perfil.styles.';


export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Perfil</Text>
      <Text style={styles.subtitle}>Aqui você poderá visualizar e editar suas informações.</Text>
    </View>
  );
}
