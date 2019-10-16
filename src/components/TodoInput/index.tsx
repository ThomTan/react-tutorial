import React, { Component, createRef, RefObject, ChangeEvent } from 'react'

interface Props {
  btnText: string | '添加TODO'
  addTodo: (todoTitle: string) => void
}
interface State {
  inputValue: string
}

export default class TodoInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.inputDOM = createRef()
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  private inputDOM: RefObject<HTMLInputElement>

  handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return
    this.handleAddClick()
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        if (this.inputDOM.current) this.inputDOM.current.focus()
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
