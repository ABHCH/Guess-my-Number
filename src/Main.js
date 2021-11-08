import React from "react";
import styled from "styled-components";

const Main = ({
  userInput,
  setUserInput,
  checkBtn,
  myScore,
  setMyscore,
  message,
  setMessage,
  highscore,
  sethighscore,
}) => {
  return (
    <Container>
      <Content>
        <input
          type="number"
          name="user"
          autoComplete="off"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <button onClick={checkBtn}>Check</button>
      </Content>
      <Instruct>
        <h2>{message}</h2>
        <Score>
          💞 Lifes: <span>{myScore}</span>
        </Score>
        <br />
        <Highscore>
          💯 Highscore: <span>{highscore}</span>
        </Highscore>
      </Instruct>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;
const Content = styled.div`
  & > input {
    width: 8rem;
    padding: 1rem;
  }
  & > button {
    margin-top: 1rem;
    margin-left: 2rem;
    cursor: pointer;
  }
`;
const Instruct = styled.div`
  & > h2 {
    color: #eaeaea;
    font-family: var(--main-Fonts);
  }
`;
const Score = styled.div`
  color: #eaeaea;
  font-size: 2rem;
  margin-top: 2rem;
`;
const Highscore = styled.div`
  font-size: 2rem;
  color: #eaeaea;
`;
export default Main;
