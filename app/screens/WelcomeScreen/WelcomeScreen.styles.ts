import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF5F70',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  brand: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#555',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
  },
});
