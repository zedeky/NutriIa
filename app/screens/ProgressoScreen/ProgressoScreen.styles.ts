import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D7D5',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2D7D5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 16,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 16,
  },
  activeSegment: {
    backgroundColor: '#C7E0F4',
  },
  segmentText: {
    color: '#000',
    fontWeight: '500',
  },
  dataCard: {
    backgroundColor: '#F8F0F0',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  dataLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  rewardCard: {
    backgroundColor: '#F8F0F0',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  shareText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  }
});

export default styles;
