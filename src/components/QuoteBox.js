import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/QuoteBox.scss';
import {htmlDecode, createTwitterString} from './functions.js';

const QuoteBox = (props) => {
  const quoteContent = htmlDecode(props.quote.content.replace(/<\/*p>/g, ""));
  const quoteAuthor = htmlDecode(props.quote.title);

  return (<article id="quote-box">
    <section className="quote-wrapper">
      <p id="text">{quoteContent}</p>
      <p id="author">
        <span>- {quoteAuthor}</span>
      </p>
    </section>
    <button id="new-quote" onClick={props.handleClick}>SPIN</button>
    <a className="button" id="tweet-quote" href={createTwitterString(quoteContent, quoteAuthor)} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fab', 'twitter-square']} size="4x"/>
    </a>
  </article>);
}

export default QuoteBox;
