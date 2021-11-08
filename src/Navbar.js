import React from "react";
import styled from "styled-components";
const Navbar = ({ againBtn, secret, setSecret }) => {
  return (
    <Container>
      <Main>
        <button onClick={againBtn}>Again</button>
        <div> ( Betweeen 1 and 20 ) </div>
      </Main>
      <Heading>
        <h1>Guess My Number</h1>
      </Heading>
      <Line>
        <span>{secret}</span>
      </Line>
    </Container>
  );
};

const Container = styled.div``;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem 0rem 1rem;

  & > div {
    color: #eaeaea;
    font-family: var(--main-Fonts);
  }
  & > button {
    padding: 0.8rem;
    width: 8rem;
    cursor: pointer;
    font-size: 1.4rem;
  }
`;
const Heading = styled.div`
  font-family: var(--main-Fonts);
  color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  font-size: 2rem;
`;
const Line = styled.div`
  border: 2px solid #eaeaea;
  position: relative;
  background-color: #eaeaea;

  & > span {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: #eaeaea;
    padding: 1rem;
    font-size: 4rem;
    width: 8rem;
    font-family: var(--main-Fonts);
    text-align: center;
  }
`;
export default Navbar;
