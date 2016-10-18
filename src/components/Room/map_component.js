import React from 'react';
import ReactDOM from 'react-dom';

class Room extends Component {
  constructor (props) {
    super(props),
    this.state = {};
  };

  render () {
    return (
      <div>
        <section><h1 className="text-center">poop</h1></section>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById('root'));
