import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }

  static defaultProps = {
    btnText: '添加TODO'
  }

  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.inputDOM = createRef()
  }

  handleKeyUp = (e) => {
    if (e !== 13) return
    this.handleAddClick()
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }

  handleAddClick = () => {
    if (this.state.inputValue === '') return
    this.props.addTodo(this.state.inputValue)
    this.setState(
      {
        inputValue: ''
      },
      () => {
        this.inputDOM.current.focus()
      }
    )
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDOM}
        />
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
