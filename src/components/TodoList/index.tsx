import React, { Component } from 'react'
import TodoItem, { TodoItemDto, CallbackCompeletedChange } from './TodoItem'

interface Props {
  todos: TodoItemDto[]
  onCompeletedChange: CallbackCompeletedChange
}

export default class TodoList extends Component<Props> {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              onCompeletedChange={this.props.onCompeletedChange}
              key={todo.id}
              {...todo}
            />
          )
        })}
      </ul>
    )
  }
}
