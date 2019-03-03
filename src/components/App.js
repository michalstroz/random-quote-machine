import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import QuoteBox from './QuoteBox';
import '../styles/App.scss';

library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: [],
      quote: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      quote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
    });
    event.preventDefault();
  }

  componentDidMount() {
    fetch("https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=41&callback=", {cache: "no-cache"}).then(res => res.json()).then((result) => {
      this.setState({
        isLoaded: true,
        quotes: result,
        quote: result[Math.floor(Math.random() * result.length)]
      });
    }, (error) => {
      this.setState({isLoaded: true, error});
    });
  }

  render() {
    const {error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (<div className="App">
        <QuoteBox quote={this.state.quote} handleClick={this.handleClick}/>
      </div>);
    }
  }
}

export default App;
