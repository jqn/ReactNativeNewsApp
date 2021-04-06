import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    marginBottom: 16,
  },
  rowContainer: {
    flex: 1,
  },
  numberContainer: {
    width: 42,
    height: 42,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff8d01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#ff8d01',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  source: {
    color: '#3d3c41',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  publishedAt: {
    color: '#8D8D94',
    fontSize: 12,
  },
});
