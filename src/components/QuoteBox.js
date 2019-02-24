import React from 'react';

const QuoteBox = (props) => {
    
    return (
      <div id="quote-box">
        <p id="text">{props.quote.content.replace(/<\/*p>/g, "")}</p>
        <p id="author">{props.quote.title}</p>
        <button id="new-quote" onClick={props.handleClick}>SPIN</button>
        <button id="tweet-quote"></button>
      </div>
    );
}

export default QuoteBox;
