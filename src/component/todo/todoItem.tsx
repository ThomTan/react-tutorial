import React, { Component } from 'react'

interface Props {
  list: TodoItem[]
}
interface State {}

export interface TodoItem {
  completed: boolean
  context: string
  enabled: boolean
}

export class todoItem extends Component<Props, State> {
  state = {}

  render() {
    return <div></div>
  }
}
