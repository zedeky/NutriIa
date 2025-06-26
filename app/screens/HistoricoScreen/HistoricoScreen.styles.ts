import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  dayButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginRight: 8,
    fontSize: 14,
  },
  dayButtonActive: {
    backgroundColor: '#C7E0F4',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#F5C9CF',
    flexDirection: 'row',
    padding: 12,
    marginBottom: 16,
    borderRadius: 16,
    gap: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 2,
  },
  diaLabel: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 16,
  marginBottom: 8,
},

});

export default styles;
