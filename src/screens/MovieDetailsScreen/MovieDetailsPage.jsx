import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import { IMG_URL } from '../../../constants';

const MovieDetailsPage = ({ route }) => {
  const { movieDetails } = route.params;
  if (!movieDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Error loading movie details.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.posterContainer}>
          <Image source={{ uri: `${IMG_URL}${movieDetails.poster_path}` }} style={styles.posterImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movieDetails.title}</Text>
          <Text style={styles.releaseDate}>Release Date: {movieDetails.release_date}</Text>
          <Text style={styles.voteAverage}>Average Vote: {movieDetails.vote_average.toFixed(1)}</Text>
          <Text style={styles.overview}>{movieDetails.overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  },
  posterContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  posterImage: {
    width: '90%',
    height: 500,
    marginTop: 20,
    borderRadius: 12,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  releaseDate: {
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  genresContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  genresLabel: {
    fontSize: 18,
    color: 'white',
    marginRight: 8,
  },
  genre: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
  },
  runtime: {
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  voteAverage: {
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
    color: 'orange',
  },
  overview: {
    fontSize: 18,
    color: 'white',
    textAlign: 'justify',
    marginTop: 15,
  },
});

export default MovieDetailsPage;
