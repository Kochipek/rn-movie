import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 20) / 2;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    borderColor: '#212121',
    elevation: 2,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: '#303030',
    height: 350,
    width: cardWidth,
  },
  posterImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardContent: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  averageVote: {
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
  },
  voteBox: {
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: 5,
    width: 40,
    height: 40,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: 0,
  },
});

export default styles;
