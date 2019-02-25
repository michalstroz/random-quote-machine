import React from 'react';
import {htmlDecode} from './functions.js';

const QuoteBox = (props) => {
    const quoteContent = props.quote.content.replace(/<\/*p>/g, "");
    const quoteAuthor = props.quote.title;
    
    return (
      <div id="quote-box">
        <p id="text">{htmlDecode(quoteContent)}</p>
        <p id="author">{htmlDecode(quoteAuthor)}</p>
        <button id="new-quote" onClick={props.handleClick}>SPIN</button>
        <button id="tweet-quote"></button>
      </div>
    );
}

export default QuoteBox;
