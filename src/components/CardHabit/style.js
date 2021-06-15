import styled from "styled-components";

export const CardStyle = styled.div`
  border: 2px solid #4d8f6a;
  box-shadow: -1px 4px 4px 1px #5cc170;
  border-radius: 10px;
  background: #6adb7e;
  margin: 70px auto;
  width: 165px;
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    color: var(--gray);
  }

  p {
    font-size: 24px;
  }

  p:last-child {
    color: var(--gray);
  }
`;

export const FlexCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }
`;
