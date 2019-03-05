// A child component updates its parent's state, and the parent passes that state to a sibling component.

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';
import Sibling from './Sibling';

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
        return (
            // An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the state

            <div>
                {/* The stateful component passes that function down to a stateless component. */}
                <Child onChange={this.changeName} />

                {/* The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component.  */}
                <Sibling name={this.state.name} />
            </div>
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
