import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomInput = (props) => {
  return (
    <View style={styles.content}>
    <View style={styles.inputContainer}>
      <FontAwesome name={props.name} size={24} color="gray" />
      <TextInput 
        secureTextEntry={props.secureTextEntry}
        style={styles.textInput}
        onChangeText={props.onChangeText}
        value={props.value}
        cursorColor={"black"}
        placeholder={props.placeholder}
      />
    </View>
  </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  content: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    width: "80%",
    height: 50,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: '500',
    margin: 5,
    width: "80%",
  },
})