import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Page extends Component {
    render() {
        return (
            <div id="page" className="site">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default Page
