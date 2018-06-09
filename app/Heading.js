import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Heading = () =>{
  return (
      <View style={styles.header}>
       <Text style={styles.headerText}>
        TODOS
       </Text>

      </View>
  )
}


const styles = StyleSheet.create({
    header:{
      marginTop:30
    },

    headerText:{
      textAlign:'center',
      fontSize:72,
      color: 'rgba(175, 47, 47, 0.25)',
      fontWeight: '100'
    }
})

export default Heading;
