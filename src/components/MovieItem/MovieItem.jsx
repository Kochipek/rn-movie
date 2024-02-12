import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

const MovieItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card containerStyle={styles.cardContainer}>
        <Image source={{ uri: item.poster_path }} style={styles.posterImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        <View style={styles.voteBox}>
          <Text style={styles.averageVote}>{item.vote_average.toFixed(1)}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default MovieItem;
