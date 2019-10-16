import React, { PureComponent } from 'react'

interface Props {
  desc: string | '如果还有明天的'
}

export default class TodoHeader extends PureComponent<Props> {
  render() {
    return (
      <>
        <h1>{this.props.children}</h1>
        <h3>{this.props.desc}</h3>
      </>
    )
  }
}
