import React, { Component } from 'react';

interface OwnState {
  list: Text[];
}

interface Text {
  id: number;
  txt: string;
}

export default class ParentChildren extends Component<{}, OwnState> {
  state: OwnState;

  constructor(props: {}) {
    super(props);
    this.state = {
      list: []
    };
    this.txtAddDom = React.createRef();
  }

  private randomNumber = (): number => Math.round(Math.random() * 100000);

  private txtAddDom: React.RefObject<HTMLInputElement>;

  addTxtClick(): void {
    const txt = this.txtAddDom.current.value;
    if (!txt) return;
    const obj: Text = { id: this.randomNumber(), txt: txt };
    this.setState({
      list: this.state.list.concat(obj)
    });
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.txtAddDom} />
        <button id="btnAdd" onClick={() => this.addTxtClick()}>
          添加
        </button>

        <div>
          <ul>
            {this.state.list.map(g => (
              <li key={g.id}>{g.txt}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
