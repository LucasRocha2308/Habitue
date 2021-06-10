import styled from "styled-components";

export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;
    justify-content: center;
  }
`;
export const Bo = styled.div`
  background-color: var(--gray);
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  margin: 20px 0;
`;
