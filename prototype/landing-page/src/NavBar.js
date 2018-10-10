import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const pages = ['causes', 'effects', 'solutions', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <li>
            <a href={'/' + page}>
                {page}
            </a>
        </li>
      )
    });

    return (
        <nav className={this.props.title}>
            <ul>{navLinks}</ul>
        </nav>
    );
  }
}

export default NavBar
