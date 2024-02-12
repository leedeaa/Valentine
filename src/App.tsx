import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Really ???????",
  "Ugh but WHY !!",
  "Don't you love me cristi ?:(",
  "Pookie bear pleasee",
  "Are you sure????",
  "Cristi, you're gonna make me cry :((",
  "whatever.",
  "I'm kidding !!",
  "I still love you</3",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/Rf342Plq9QgAAAAi/peach-goma-love-smooch-kiss.gif"
          />
          <div className="text">
            Yupperzz!! We're having a movie date watching 'Anyone But You' on
            Wednesday. Save it ;)
          </div>
        </>
      ) : (
        <>
          <img
            alt="bears"
            src="https://media1.tenor.com/m/m05bXMso59oAAAAC/cute-cat.gif"
          />
          <div> Will You Be My Valentine ? </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
