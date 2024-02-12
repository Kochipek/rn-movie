// SearchBar.js
import React from 'react';
import { SearchBar as RNESearchBar } from 'react-native-elements';

const SearchBar = ({ onChangeText, value }) => {
  return (
    <RNESearchBar
      containerStyle={{ backgroundColor: '#121212' }}
      inputContainerStyle={{ backgroundColor: '#121212' }}
      placeholder="Search..."
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default SearchBar;
