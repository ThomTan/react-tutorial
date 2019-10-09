import React, { Component } from 'react'
import { TodoItem } from './todoItem'

interface Props {}
interface State {
  list: TodoItem[]
}

export default class Todo extends Component<Props, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    return <div></div>
  }
}
