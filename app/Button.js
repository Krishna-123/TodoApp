import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';


const Button = ({submitTodo}) =>(
    <View style = {styles.buttonContainer}>
      <TouchableHighlight
        underlayColor='#efefef'
        style={styles.button}
        onPress={submitTodo}>
        <Text style={styles.submit}>
          submit!!
        </Text>
      </TouchableHighlight>
    </View>
)

export default Button;

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems: 'flex-end'
  },

  button:{
    height:50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor:'#ffffff',
    width: 100,
    marginRight:20,
    marginTop: 15,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent:'center',
    alignItems: 'center'
    },

  submit:{
    color: '#666666',
    fontWeight: '600'
  }


})
