import React, { Component } from 'react'

const nonp = () => {}

export interface TodoItemDto {
  id: number
  title: string
  isCompleted: boolean
}

export type CallbackCompeletedChange = (id: number) => void

interface Props extends TodoItemDto {
  onCompeletedChange: CallbackCompeletedChange
}

export default class TodoItem extends Component<Props> {
  handleCheckboxChange = () => {
    const { onCompeletedChange = nonp, id } = this.props
    onCompeletedChange(id)
  }

  componentDidUpdate(prevProps: Props) {
    return prevProps.isCompleted !== this.props.isCompleted
  }

  render() {
    const { isCompleted, title } = this.props
    return (
      <li>
        <input
          type="checkbox"
          checked={isCompleted}
          onClick={this.handleCheckboxChange}
        />
        <span>
          {title}
          {isCompleted ? '已完成' : '未完成'}
        </span>
      </li>
    )
  }
}
