import { StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';

const PressableButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'gray' : 'black',
        },
        styles.button,
      ]}
    >
      <Text style={{ color: "white", fontWeight: 600 }}>{props.Text}</Text>
    </Pressable>
  );
}

export default PressableButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#246EE9",
  },
});
