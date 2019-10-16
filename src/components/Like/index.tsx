import React, { Component } from 'react'

interface Props {}
interface State {
  isLiked: boolean
}

export default class Like extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLiked: false
    }
    this.handleLikedClick = this.handleLikedClick.bind(this)
  }

  handleLikedClick = () => {
    this.setState((prevState) => {
      return {
        isLiked: !prevState.isLiked
      }
    })
  }

  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {this.state.isLiked ? '取消 ❤️' : '喜欢 🖤'}
        </span>
      </div>
    )
  }
}
