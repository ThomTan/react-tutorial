import React, { Component } from 'react';
import Counter from './component/counter';
import ParentChildren from './component/parentChildren';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>组件练习</h1>
        <h2>计数器组件</h2>
        <Counter />
        <br />
        <h2>父子组件</h2>
        <ParentChildren />
      </div>
    );
  }
}
