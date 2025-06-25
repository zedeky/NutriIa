import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#BF5F70',
  },
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  backgroundSvg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  content: {
    flex: 1, // <-- ESSENCIAL PARA ALTURA TOTAL
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  brand: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingBottom: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  link: {
    color: '#0066cc',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#2F9E44',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 16,
  },
  registerLink: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
});
