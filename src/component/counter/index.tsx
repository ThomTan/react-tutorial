import React, { Component } from 'react';

interface OwnState {
  count: number;
}

export default class Counter extends Component<{}, OwnState> {
  // constructor(props: {}) {
  //   super(props);
  //   this.state = { count: 1 };
  // }

  //readonly state = { count: 1 };

  state: OwnState;
  constructor(props: {}) {
    super(props);
    this.state = { count: 1 };
  }

  onClicked(type: string) {
    let g = this.state.count;
    switch (type) {
      case 'add':
        g++;
        break;
      case 'subtract':
        g--;
        break;
    }
    this.setState({
      count: g
    });
  }

  render() {
    return (
      <div>
        <button id="add" onClick={g => this.onClicked(g.currentTarget.id)}>
          +
        </button>
        <span>{this.state.count}</span>
        <button id="subtract" onClick={g => this.onClicked(g.currentTarget.id)}>
          -
        </button>
      </div>
    );
  }
}
