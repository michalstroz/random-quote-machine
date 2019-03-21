import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/QuoteBox.scss';
import {htmlDecode, createTwitterString} from './functions.js';

const QuoteBox = (props) => {
  const quoteContent = htmlDecode(props.quote.content.replace(/<\/*p>/g, ""));
  const quoteAuthor = htmlDecode(props.quote.title);
  const styles = [
    {
      boxShadow: `1px 1px 4px 0 ${props.colors[2]}`,
      color: props.colors[1],
    },
    {
      backgroundColor: props.colors[1],
      color: '#ffffff'
    },
    {
      color: props.colors[1]
    }
  ]

  return (
    <article id="quote-box" style={styles[0]}>
      <section className="quote-wrapper">
        <p id="text"><FontAwesomeIcon icon="quote-left" size="1x"/> {quoteContent}<FontAwesomeIcon icon="quote-right" size="1x"/></p>
        <p id="author">
          <span>- {quoteAuthor}</span>
        </p>
      </section>
      <section className="buttons">
        <button id="new-quote"  onClick={props.handleClick} style={styles[1]}>SPIN</button>
        <a className="button" id="tweet-quote" href={createTwitterString(quoteContent, quoteAuthor)} style={styles[2]} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'twitter-square']} />
        </a>
      </section>
    </article>
  );
}

export default QuoteBox;
