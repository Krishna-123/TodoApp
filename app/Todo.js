import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TodoButton from './TodoButton';

const Todo = ({todo, index, deleteTodo, toggleComplete}) => {
  return (
    <View style={styles.TodoContainer}>
      <Text style={styles.TodoText}>{index}. {todo.title} </Text>
      <View style= {styles.Buttons}>
        <TodoButton
          name="Done"
          complete=todo.complete
          onPress={() => toggleComplete(todo.todoIndex)}
          />
        <TodoButton
        name="Delete"
        onPress={() => deleteTodo(todo.todoIndex)}
        />
      </View>
    </View>
  )

}

export default Todo;

const styles = StyleSheet.create({
  TodoContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    borderWidth: 1,
    borderColor: '#ededed',
    marginBottom:2

  },

  TodoText:{
    fontSize:17
  },

  Buttons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }

})
