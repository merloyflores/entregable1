import React from "react";
import QuoteButton from "./QuoteButton";

const QuoteBox = ({ quote, newQuote, color }) => {
  return (
    <div className="quoteBox" style={{color: color}}>
      <i className="quoteBox__icon  bx bxs-quote-left"></i>
      <p className="quoteBox__quote">{quote?.quote}</p>
      <h3 className="quoteBox__author">{quote?.author}</h3>
      <QuoteButton newQuote={newQuote} color={color}/>
    </div>
  );
};

export default QuoteBox;
