import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = ({inputValue, inputChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      placeholder="what needs to be done?"
      placeholderTextColor='#CACACA'
      selectionColor= '#666666'  // cursor color
      value = {inputValue}
      onChangeText = {inputChange}
     />

    </View>
  )

}

export default Input;

const styles = StyleSheet.create({
  inputContainer :{
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    borderWidth:2,
    borderColor: 'rgba(0,0,0,.1)',

  },
  input:{
    height:60,
    backgroundColor:'#FFFFFF',
    paddingLeft:20,
    paddingRight:20

  }

})
