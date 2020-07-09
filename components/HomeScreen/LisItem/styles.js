import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardBody: {
    padding: 10,
  },
  cardCategory: {
    color: '#909aad',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
