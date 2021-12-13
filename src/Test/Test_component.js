import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  // component가 처음 화면에 그려지기전 호출 되는 함수
  constructor(props) {
    super(props)
    console.log(props)
  }

  // component가 처음 화면에 그려진 이후 호출되는 함수
  componentDidMount() {
    console.log('component rendered')
  }

  // 처음을 제외하고 conponent가 다시 그려진 이후 호출되는 함수(화면 업데이트)
  componentDidUpdate() {
    console.log('component Update')
  }

  // conponent가 죽을때 호출되는 함수
  componentWillUnmount() {
    console.log('component Die')
  }

  add = () => {
    console.log('add')
    this.setState({ count: this.state.count + 1 });
  }

  minus = () => {
    console.log('minus')
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
