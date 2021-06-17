import styled from "styled-components";

export const DivHeader = styled.div`
  background-color: var(--green-header);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    padding: 30px 40px;
  }
`;
export const Logo = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    gap: 40px;
  }
`;
