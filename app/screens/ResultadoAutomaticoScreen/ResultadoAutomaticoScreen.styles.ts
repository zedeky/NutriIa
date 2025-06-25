import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#D9AAB7',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -24,
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  macroCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#A3F9B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  macroText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  macroLabel: {
    fontSize: 12,
    color: '#333',
  },
  alimentosBox: {
    backgroundColor: '#C5DCF5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  alimentosLabel: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  alimentosText: {
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#6BE39E',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  confirmButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
