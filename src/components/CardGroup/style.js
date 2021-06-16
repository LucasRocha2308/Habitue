import styled from "styled-components";

export const CardStyle = styled.div`
  border: 2px solid var(--green);
  mix-blend-mode: hard-light;
  border-radius: 10px 10px 0px 0px;
  background-image: linear-gradient(
    160deg,
    var(--dark-green) 0%,
    transparent 100%
  );
  margin: 20px auto;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 15px;

  h2 {
    color: var(--green);
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    text-shadow: 0px 0px 8px var(--green-header);
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 10%;
  }
  p {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: justify;
    color: var(--gray);
    margin-bottom: 15px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 5px 0;
  }
  pre {
    color: var(--green);
    padding: 15px 0;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    height: 150px;
  }
`;

export const FlexCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  & > button {
    position: fixed;
    bottom: 20px;
    left: 30%;
    padding: 0, 30px;
    transform: translate(-50%);
  }

  & > button:last-of-type {
    bottom: 20px;
    left: 70%;
  }
`;

export const BntRemove = styled.button`
  background: var(--gray);
  border: 1px solid #000000;
  box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.57);
  border-radius: 20px;
  width: 20px;
  margin-bottom: 50px;
  height: 20px;

  ::after {
    content: "X";
    color: #ffffff;
    backdrop-filter: blur(4px);
  }

  @media (min-width: 1100px) {
    margin-bottom: 0;
  }
`;
export const Bnt = styled.button`
  background-color: var(--gray);
  color: var(--green);
  border: 2px solid var(--green);
  padding: 10px;
  box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  border: 3px solid #000000;
  position: relative;
  &:hover {
    z-index: 2;
    color: var(--gray);
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--green);
    transition: 0.2s;
    z-index: -1;
    top: 0;
    border-radius: 10px;
  }
  :hover::before {
    width: 100%;
  }
`;
