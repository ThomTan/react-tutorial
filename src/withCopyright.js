import React, { Component } from 'react'

const withCopyright = (YouComponent) => {
  return class WithCopyright extends Component {
    render() {
      return (
        <>
          <YouComponent {...this.props} />
          <div>&copy; 2019 &emsp; 123</div>
        </>
      )
    }
  }
}

export default withCopyright
