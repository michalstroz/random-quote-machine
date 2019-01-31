import React from 'react';

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <p id="text"></p>
        <p id="author"></p>
        <button id="new-quote">SPIN</button>
        <button id="tweet-quote"></button>
      </div>
    );
  }
}

export default QuoteBox;
