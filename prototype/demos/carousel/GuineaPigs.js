import React, { Component } from 'react';

// If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as JavaScript function!
// A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes.

class GuineaPigs extends Component {
    render() {
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={this.props.src} />
            </div>
        );
    }
}

// Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components.
const GuineaPigs = (props) => {
    return (
        <div>
            <h1>Cute Guinea Pigs</h1>
            <img src={props.src} />
        </div>
    );
}

export default GuineaPigs
