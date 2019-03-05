// a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent's state.

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    // A stateful component class defines a function that calls this.setState.
    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
