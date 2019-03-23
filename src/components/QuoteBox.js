import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/QuoteBox.scss';
import {htmlDecode, createTwitterString} from './functions.js';
import styled, {css, keyframes } from 'styled-components';

const QuoteBox = (props) => {
  const quoteContent = htmlDecode(props.quote.content.replace(/<\/*p>/g, ""));
  const quoteAuthor = htmlDecode(props.quote.title);
  const colors = props.colors;

  const changeColor = keyframes`
    0% {
      color: ${colors.previousColor}
    }
    100% {
      color: ${colors.currentCollor}
    }
  `;

  const changeBackground = keyframes`
    0% {
      background-color: ${colors.previousColor}
    }
    100% {
      background-color: ${colors.currentCollor}
    }
  `;

  const animation = () => css`${changeColor} 1000ms ease-out`;

  const QuoteBoxWrapper = styled.article`
    animation: ${animation};
    animation-fill-mode: forwards;
    box-shadow: 1px 1px 4px 0 ${colors.boxShadow};
  `;

  const TweetQuote = styled.a`
      animation: ${animation};
      animation-fill-mode: forwards;
  `;

  const NewQuote = styled.button`
      animation: ${changeBackground} 1000ms ease-out;
      animation-fill-mode: forwards;
  `;

  return (
    <QuoteBoxWrapper id="quote-box">
      <section className="quote-wrapper">
        <p id="text"><FontAwesomeIcon icon="quote-left" size="1x"/> {quoteContent}<FontAwesomeIcon icon="quote-right" size="1x"/></p>
        <p id="author">
          <span>- {quoteAuthor}</span>
        </p>
      </section>
      <section className="buttons">
        <NewQuote id="new-quote"  onClick={props.handleClick}>SPIN</NewQuote>
        <TweetQuote className="button" id="tweet-quote" href={createTwitterString(quoteContent, quoteAuthor)} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'twitter-square']} />
        </TweetQuote>
      </section>
    </QuoteBoxWrapper>
  );
}

export default QuoteBox;
