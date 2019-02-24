import React, { Component } from 'react';
import '../styles/App.css';
import QuoteBox from './QuoteBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: []
    }
  }

  componentDidMount() {
    fetch("https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=41&callback=", {
       cache: "no-cache"
    })
      .then(res => res.json())
    	.then(
        (result) => {
          this.setState({
            isLoaded: true,
            quotes: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const {error, isLoaded, quotes} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <QuoteBox quotes={quotes}/>
        </div>
      );
    }
  }
}

export default App;
