import styled from "styled-components";

export const BackCard = styled.div`
  background-color: rgba(106, 219, 126, 0.3);
  border-radius: 11px;
  margin: 50px auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  padding: 20px;
  text-align: center;

  width: 90vw;
  height: 220px;

  @media (min-width: 600px) {
    max-width: 870px;
    height: 500px;
  }

  button {
    width: 80px;
    font-size: 12px;
    border-radius: 12px;
    margin: 20px;
  }
`;
