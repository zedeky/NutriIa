import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
    alignSelf: 'center',
  },
  tabGroup: {
    flexDirection: 'row',
    backgroundColor: '#E1ECF9',
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 32,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
  activeTab: {
    backgroundColor: '#A4C9F2',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  form: {
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    marginBottom: 20,
    paddingVertical: 4,
    fontSize: 16,
    color: '#000',
  },
});
