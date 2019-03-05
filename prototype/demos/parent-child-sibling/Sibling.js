import React, {Component} from 'react';

class Sibling extends Component {
    render() {
        return (
            <div>
                {/* That stateless component class receives the state and displays it. */}
                <h1>Hey, my name is {this.props.name}!</h1>
                <h2>Don't you think {this.props.name} is the prettiest name ever?</h2>
                <h2>Sure am glad that my parents picked {this.props.name}!</h2>
            </div>
        );
    }
}

export default Sibling
