import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    backgroundColor: '#FFF',
    marginTop: 20,
    marginHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    gap: 12,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  value: {
    fontSize: 12,
    color: '#666',
  },
});
