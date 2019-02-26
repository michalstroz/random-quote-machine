import React from 'react';
import {htmlDecode, createTwitterString} from './functions.js';

const QuoteBox = (props) => {
    const quoteContent = htmlDecode(props.quote.content.replace(/<\/*p>/g, ""));
    const quoteAuthor = htmlDecode(props.quote.title);

    return (
      <div id="quote-box">
        <p id="text">{quoteContent}</p>
        <p id="author">{quoteAuthor}</p>
        <button id="new-quote" onClick={props.handleClick}>SPIN</button>
        <a className="button" id="tweet-quote" href={createTwitterString(quoteContent, quoteAuthor)} target="_blank">tweet</a>
      </div>
    );
}

export default QuoteBox;
