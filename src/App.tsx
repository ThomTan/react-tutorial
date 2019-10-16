import React, { Component } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like,
  TodoItemDto
} from './components'

interface Props {}
interface State {
  title: string
  desc: string
  todos: TodoItemDto[]
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
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
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo = (todoTitle: string) => {
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random() * 10000,
        title: todoTitle,
        isCompleted: false
      })
    })
  }

  onCompeletedChange = (id: number) => {
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
        <TodoInput addTodo={this.addTodo} btnText="添加TODO" />
        <TodoList
          todos={this.state.todos}
          onCompeletedChange={this.onCompeletedChange}
        />
        <Like />
      </>
    )
  }
}
