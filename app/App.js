import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TextInput, Text, TouchableHighlight} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';

let todoindex = 0
export default class App extends Component{
  constructor(){
    super();
    this.state={
      type:'All',
      inputValue: '',
      todos:[]
    }
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  inputChange(inputValue){  //takes the values and set it to the state
    console.log("Input Value", inputValue)
    this.setState({inputValue})
  }

  submitTodo(){
    const {inputValue} = this.state  // this is one of the class variable we are using so wwee need to bind it.
    if (inputValue.match(/^\s*$/)){
      alert('plz write some notes then hit submit')
      return
    }// if there are only spaces then do nothing

    const todo = {
      title: inputValue,
      todoindex,
      complete:false
    }
    todoindex++
    const todos = [...this.state.todos, todo]
    this.setState({todos, inputValue:''}, () => {
      console.log("state: ", this.state) // this is the callback
    })
  }

  toggleComplete(todoIndex){  //toggle whether the work is complete or not
    let {todos} = this.state
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })

    this.setState({ todos })
    console.log("togggle complete is pressed")
  }

  deleteTodo(todoIndex){   // delete todo will delete the Todo
    let {todos} = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({todos})
  }

  render(){
    const {inputValue, todos} = this.state

    let ShowTodo = null
    if (todos.length){
       ShowTodo  = <TodoList todos={todos} deleteTodo={this.deleteTodo} toggleComplete={this.toggleComplete} />
    }

    return (
      <View style={styles.container}>
       <ScrollView keyboardSholdPersistTaps='always' style={styles.content}>
          <Heading />
          <Input
            inputValue = {inputValue}
            inputChange = { (text) => this.inputChange(text) }
          />
            {
              ShowTodo
            }

          <Button submitTodo={this.submitTodo} />

       </ScrollView>
      </View>

    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f5f5f5',
  },
  content:{
    flex:1,
    paddingTop:60
  }
})
