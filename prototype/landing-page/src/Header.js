import React, {Component} from 'react';
import NavBar from "./NavBar";

class Header extends Component {
    render() {
        return (
            <header>
                <NavBar title="header-nav" />
            </header>
        );
    }
}

export default Header
