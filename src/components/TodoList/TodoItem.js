import React, { Component } from 'react'
const nonp = () => {}

export default class TodoItem extends Component {
  handleCheckboxChange = () => {
    const { onCompeletedChange = nonp, id } = this.props
    onCompeletedChange(id)
  }

  componentDidUpdate(prevProps) {
    return prevProps.isCompleted !== this.props.isCompleted
  }

  render() {
    const { isCompleted, title } = this.props

    return (
      <li>
        <input
          checked={isCompleted}
          onClick={this.handleCheckboxChange}
          type="checkbox"
        />
        <span>
          {title}
          {isCompleted ? '已完成' : '未完成'}
        </span>
      </li>
    )
  }
}
