// propTypes are useful for two reasons. The first reason is prop validation.
// Validation can ensure that your props are doing what they're supposed to be doing. If props are missing, or if they're present but they aren't what you're expecting, then a warning will print in the console.
// This is useful, but reason #2 is arguably more useful: documentation.
// Documenting props makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

import React, {Component} from 'react';

class MessageDisplayer extends Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have one property for each expected prop. Notice that the value of propTypes is an object, not a function!
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};

export default MessageDisplayer
