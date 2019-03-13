import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faQuoteRight, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {randomColors} from './functions'
import QuoteBox from './QuoteBox';
import '../styles/App.scss';

library.add(fab, faQuoteRight, faQuoteLeft);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: [],
      quote: {},
      colors: [],
      backgroundGradient: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const colors = randomColors();
    this.setState({
      quote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)],
      colors: colors,
      backgroundGradient: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`
    });
    event.preventDefault();
  }

  componentDidMount() {
    const colors = randomColors();
    fetch("https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=41&callback=", {cache: "no-cache"}).then(res => res.json()).then((result) => {
      this.setState({
        isLoaded: true,
        quotes: result,
        quote: result[Math.floor(Math.random() * result.length)],
        colors: colors,
        backgroundGradient: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`
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
      return (<div className="App" style={{background: this.state.backgroundGradient}}>
        <QuoteBox quote={this.state.quote} colors={this.state.colors} handleClick={this.handleClick}/>
      </div>);
    }
  }
}

export default App;
