import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Image,TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { SearchBar,Card } from 'react-native-elements';
import { IMG_URL } from '../../../constants';
import { fetchMoviesByQuery } from '../../data/apiCalls'

const HomePage = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    fetchMoviesByQuery(text)
      .then((movies) => setMovies(movies))
      .catch((error) => console.error('Error fetching movies:', error));
  };

  useEffect(() => {
    fetchMoviesByQuery('');
    console.log('HomePage mounted');
  }, []);

  const renderMovieItem = ({ item }) => {
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = (screenWidth - 20) / 2;
  
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('MovieDetailsPage', { movieDetails: item});
        }}
      >
        <Card containerStyle={[styles.cardContainer, { width: cardWidth }]}>
          <Image
            source={{ uri: `${IMG_URL}${item.poster_path}` }}
            style={styles.posterImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
          <View style={styles.voteBox} >
          <Text style={styles.averageVote}>{item.vote_average.toFixed(1)}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View style={styles.contentContainer}>
        <SearchBar
        containerStyle={{backgroundColor: '#121212'}}
        inputContainerStyle={{backgroundColor: '#121212'}}
         placeholder="Search..." 
         onChangeText={handleSearch} 
         value={searchQuery} />
        <FlatList
          data={movies}
          numColumns={2}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#121212',
  },
  contentContainer: {
    flex: 1,
  },
  flatListContainer: {
    flexGrow: 1,
    paddingBottom: 10,
    backgroundColor: '#212121',
  },
  cardContainer: {
    borderRadius: 10,
    borderColor: '#212121',
    elevation: 2,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: '#303030',
    height: 350,
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


export default HomePage;