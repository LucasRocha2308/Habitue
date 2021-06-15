import styled from "styled-components";
import backgroundGroup from "../../images/backgroundGroup.svg";
export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundGroup});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;
    justify-content: center;
  }
`;
export const CardsContainer = styled.div`
  background-image: linear-gradient(
    160deg,
    var(--dark-green) 0%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  gap: 20px;
  margin: 20px auto;
  border-radius: 10px;
  padding: 40px;
  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 75px;
    font-feature-settings: "kern" off;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    width: 500px;
    padding: 100px;
    div {
      flex-direction: row;
      margin: 0 auto;
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const Container = styled.div`
  background-color: var(--gray);
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  margin: 20px 0;
`;
