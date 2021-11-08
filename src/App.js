import React, { useEffect } from "react";
import Main from "./Main";
import Navbar from "./Navbar";

const App = () => {
  const [bgColor, setbgColor] = React.useState("");
  const [guessNumber, setguessNumber] = React.useState("");
  const [message, setMessage] = React.useState("Start guessing....");
  const [myScore, setMyscore] = React.useState(20);
  const [highscore, sethighscore] = React.useState(0);
  const [secret, setSecret] = React.useState("?");
  const [userInput, setUserInput] = React.useState("");

  console.log(bgColor);
  useEffect(() => {
    setguessNumber(Math.trunc(Math.random() * 20) + 1);
  }, []);
  const checkBtn = () => {
    if (Number(userInput) === guessNumber) {
      setMessage("🎉 correct Number ");
      setSecret(guessNumber);
      setbgColor(document.body.classList.add("bgblack"));
      if (myScore > highscore) {
        sethighscore(myScore);
      }
    } else if (Number(userInput) > guessNumber) {
      setMessage("⚡️ Number is too High");
      setMyscore(myScore - 1);
    } else if (Number(userInput) < guessNumber) {
      setMessage("📉 Number is too low");
      setMyscore(myScore - 1);
    }
  };
  const againBtn = () => {
    setMessage("start guessing....");
    setbgColor(document.body.classList.remove("bgblack"));
    setMyscore(20);
    setSecret("?");
    setguessNumber(Math.trunc(Math.random() * 20) + 1);
  };
  return (
    <>
      <Navbar againBtn={againBtn} secret={secret} setSecret={setSecret} />
      <Main
        userInput={userInput}
        setUserInput={setUserInput}
        checkBtn={checkBtn}
        myScore={myScore}
        setMyscore={setMyscore}
        sethighscore={sethighscore}
        highscore={highscore}
        message={message}
        setMessage={setMessage}
        highscore={highscore}
        sethighscore={sethighscore}
      />
    </>
  );
};

export default App;
