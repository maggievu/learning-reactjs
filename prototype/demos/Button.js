import React, { Component } from 'react';

class Button extends Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}


// Example 1
<Button>
  I am a child of BigButton.
</Button>


// Example 2
{/* <BigButton>
  <LilButton />
</BigButton> */}


// Example 3
<Button />

export default Button
