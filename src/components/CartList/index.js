import React, { Component } from 'react'
import { increment, decrement } from '../../actions/cart'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      carList: []
    }
  }

  getState = () => {
    this.setState({
      carList: this.props.store.getState().cart
    })
  }

  componentDidMount() {
    this.getState()
    this.props.store.subscribe(this.getState)
  }

  render() {
    console.log(this.state)

    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {this.state.carList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.store.dispatch(decrement(item.id))
                    }}
                  >
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => {
                      this.props.store.dispatch(increment(item.id))
                    }}
                  >
                    +
                  </button>
                </td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
