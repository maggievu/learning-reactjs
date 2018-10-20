import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
// import Home from './containers/Home';
// import Example from './Example';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<Example />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

class Example extends React.Component {
  // componentWillMount() {
  //   alert('component is about to mount!');
  // }

  constructor(props) {
   super(props);

   this.state = { text: 'bla' };
 }

 // setTimeout(() => {
     componentDidMount() {
   this.setState({ text: 'Hello world' });
    }
// }, 1000);

  render() {
    return <h1>{this.state.text}</h1>;
  }
  // componentDidMount() {
  //     alert('component mounted!');
  // }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);

setTimeout(() => {
  ReactDOM.render(
    <Example />,
    document.getElementById('root')
  );
}, 1000);
