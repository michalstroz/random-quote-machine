import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/QuoteBox.scss';
import {htmlDecode, createTwitterString} from './functions.js';

const QuoteBox = (props) => {
  const quoteContent = htmlDecode(props.quote.content.replace(/<\/*p>/g, ""));
  const quoteAuthor = htmlDecode(props.quote.title);

  return (<article id="quote-box">
    <section className="quote-wrapper">
      <p id="text"><FontAwesomeIcon icon="quote-left" size="2x"/> {quoteContent}<FontAwesomeIcon icon="quote-right" size="2x"/></p>
      <p id="author">
        <span>- {quoteAuthor}</span>
      </p>
    </section>
    <section className="buttons">
      <button id="new-quote" onClick={props.handleClick}>SPIN</button>
      <a className="button" id="tweet-quote" href={createTwitterString(quoteContent, quoteAuthor)} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
      </a>
    </section>
  </article>);
}

export default QuoteBox;
