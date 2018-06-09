import React from 'react';
import {StyleSheet, View } from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, toggleComplete, deleteTodo}) => {
  const todo = todos.map( (todo, i) => {
      return (<Todo
          key={todo.todoindex}
          todo={todo}
          index={i}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          />)
  })

  return (
    <View style={styles.TodoContainer}>
      {todo}
    </View>
  )
}

export default TodoList;


const styles = StyleSheet.create({
  TodoContainer:{
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#FFFFFF',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#ededed',
    paddingLeft:10,
    paddingTop:7,
    paddingRight:10,
    paddingBottom:7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },

  }
})
