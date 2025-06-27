import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  headerRosa: {
    backgroundColor: '#D57A8D',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  titulo: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputCard: {
    backgroundColor: '#C7E0F4',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  inputNome: {
    backgroundColor: 'transparent',
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
    width: 400
  },
  gramasWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  inputGramas: {
    backgroundColor: '#A9D1F7',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    minWidth: 60,
    textAlign: 'right',
    marginRight: 4,
    fontSize: 16,
    color: '#000',
  },
  grLabel: {
    fontSize: 16,
    color: '#000',
  },
  remover: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
  adicionar: {
    color: 'green',
    fontSize: 14,
    marginBottom: 24,
  },
  estimativasBox: {
    backgroundColor: '#D57A8D',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  estimativa: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  confirmar: {
    backgroundColor: '#4BE38C',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  confirmarTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelar: {
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  cancelarTexto: {
    color: '#000',
    fontWeight: 'bold',
  },

  // NOVOS ESTILOS PARA A CAIXA DE CONFIRMAÇÃO
  confirmBox: {
    position: 'absolute',
    top: 70,
    left: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: '#E1F8D2',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  confirmText: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
  closeButton: {
    fontSize: 18,
    color: '#2E7D32',
    marginLeft: 12,
  },

  // NOVOS ESTILOS PARA RNPickerSelect
  pickerSelectIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#333',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginBottom: 12,
  },

  pickerSelectAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#333',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginBottom: 12,
  },

  pickerPlaceholder: {
    color: '#999',
    fontSize: 16,
  },

  pickerIconContainer: {
    top: 15,
    right: 12,
  }
});

export default styles;
