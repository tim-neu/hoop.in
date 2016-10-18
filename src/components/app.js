import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  };

  render () {
    return (
      <div>
        <section><h1 className="text-center">Logo</h1></section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
