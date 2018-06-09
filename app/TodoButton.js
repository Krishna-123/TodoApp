import React from 'react';
import {StyleSheet, Text, TouchableHighlight} fromm 'react-native';

const TodoButton = ({name, complete, onPress}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor='#efefef'
      style={styles.Button}>

       <Text style={[ styles.Text,
            complete? styles.complete : null,
            name==="Delete"? styles.deleteButton: null ]}>
        {name}
       </Text>
    </TouchableHighlight>
  )

}

export default TodoButton;

const styles =  StyleSheet.create({
  Button:{
    alignSelf: 'flex-end',
    padding:7,
    borderColor: '#ededed',,
    borderWidth:1,
    borderRadius:4,
    marginRight:4
  },

  Text: {
    color: '#666666'
  },
  complete:{
    color: 'green',
    fontWeight: 'bold'
  },

  deleteButton:{
    color: 'rgba(175, 47, 47, 1)'
  }
})
