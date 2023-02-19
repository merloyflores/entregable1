import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

function App() {
  const arrayColors = [
    "#ffa43a",
    "#759eff",
    "#525558",
    "#68da3e",
    "#00c6ab",
    "#6aa3b4",
    "#416864",
    "#b38471",
    "#5c5e36",
    "#1d3d33",
    "#f50400",
  ];

  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length;
    const randomIndex = Math.floor(Math.random() * quantityValues);
    return arrayElements[randomIndex];
  };

  const [quote, setQuote] = useState(getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors))
  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  };

  console.log(getRandom(db));

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
        quote={quote} 
        newQuote={newQuote} 
        color={color}/>
    </div>
  );
}

export default App;
