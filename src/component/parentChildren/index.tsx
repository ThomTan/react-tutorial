import React, { Component } from 'react'
import { Text, Children } from './children'

interface OwnState {
  list: Text[]
}

export default class ParentChildren extends Component<{}, OwnState> {
  state: OwnState

  constructor(props: {}) {
    super(props)
    this.state = {
      list: []
    }
    this.txtAddDom = React.createRef()
  }

  private randomNumber = (): number => Math.round(Math.random() * 100000)

  private txtAddDom: React.RefObject<HTMLInputElement>

  private addTxtClick(): void {
    const txt = this.txtAddDom.current ? this.txtAddDom.current.value : null
    if (!txt) return
    const obj: Text = { id: this.randomNumber(), txt: txt }
    this.setState({
      list: this.state.list.concat(obj)
    })
  }

  private addTxtKeyDown(keyCode: number): void {
    if (keyCode !== 13) return
    this.addTxtClick()
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.txtAddDom}
          onKeyDown={e => this.addTxtKeyDown(e.keyCode)}
        />
        <button id="btnAdd" onClick={() => this.addTxtClick()}>
          添加
        </button>
        <Children list={this.state.list} />
      </div>
    )
  }
}
