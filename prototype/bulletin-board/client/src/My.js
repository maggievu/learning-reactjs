import React, { Component } from 'react';

// const API = 'https://hn.algolia.com/api/v1/search?query=';
const API = 'https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt';

// const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: "bla",
    };
  }

  componentDidMount() {
      jquery.ajax({
          url: API
      })
    // fetch(API, {mode: 'no-cors'})
    //   .then(response => {console.log(response.())});
      // .then(text => {console.log(text)});

  }

  render() {
      return (
        //   <ul>
        //   {this.state.hits.map(item => (
        //     <li>
        //       {item.title} by <br /> {item.author}
        //     </li>
        //   ))}
        // </ul>
        this.state.hits
    );
  }
}

export default App;
