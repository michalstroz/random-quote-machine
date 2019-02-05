import React, { Component } from 'react';
import '../styles/App.css';
import QuoteBox from './QuoteBox';

class App extends Component {

  componentDidMount() {
    fetch("https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=41&callback=", {
       cache: "no-cache"
    })
      .then(res => res.json())
    	.then(result => console.log(result));
  }

  render() {
    return (
      <div className="App">
        <QuoteBox />
      </div>
    );
  }
}

export default App;
