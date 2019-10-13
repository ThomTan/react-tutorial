import React, { Component } from 'react'
import { TodoHeader, TodoInput, TodoList, Like } from './components'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '待办事项',
      desc: '今日，今事',
      todos: [
        {
          id: 1,
          title: '吃饭',
          isCompleted: false
        },
        {
          id: 2,
          title: '睡觉',
          isCompleted: false
        }
      ]
    }
  }

  addTodo = (todoTitle) => {
    this.setState({
      todos: this.state.todos.concat({
        id: parseInt(Math.random() * 10000),
        title: todoTitle,
        isCompleted: false
      })
    })
  }

  onCompeletedChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) todo.isCompleted = !todo.isCompleted
          return todo
        })
      }
    })
  }

  render() {
    return (
      <>
        <TodoHeader desc={this.state.desc}>{this.state.title}</TodoHeader>
        <TodoInput addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
        <Like />
      </>
    )
  }
}
