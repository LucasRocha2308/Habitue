import styled from "styled-components";
import backgroundDashboard from "../../images/backgroundDashboard.svg";

export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundDashboard});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;
    justify-content: center;
  }
`;
export const Container = styled.div`
  background-color: var(--gray);
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0;
`;
