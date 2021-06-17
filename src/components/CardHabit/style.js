import styled from "styled-components";

export const CardStyle = styled.div`
  border: 2px solid #4d8f6a;
  box-shadow: -1px 4px 4px 1px #5cc170;
  border-radius: 10px;
  background: #6adb7e;
  width: 180px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 20px 0;
  align-items: center;

  h2 {
    color: var(--gray);
  }

  p {
    font-size: 24px;
  }

  p:last-child {
    color: var(--gray);
  }

  & > label {
    color: var(--dark-green);
    margin-top: 5px;
  }

  svg {
    color: var(--gray);
    margin-top: 5px;
    cursor: pointer;
  }

  svg:hover {
    border-radius: 100%;
    box-shadow: var(--dark-green) 0 0 2px 2px;
  }
`;

export const FlexCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  justify-content: center;
  padding: 0;
  @media only screen and (min-width: 780px) {
    padding: 0 80px;
    justify-content: flex-start;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto 10px;
  gap: 10px;
  justify-content: space-between;
  @media only screen and (min-width: 1100px) {
    justify-content: center;
    gap: 50px;
  }
`;

export const BntRemove = styled.button`
  background: #464353;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.57);
  border-radius: 20px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 150px;
  ::after {
    content: "X";
    color: #ffffff;
    backdrop-filter: blur(4px);
  }
`;
