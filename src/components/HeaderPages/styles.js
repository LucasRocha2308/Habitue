import styled from "styled-components";

export const DivHeaderPages = styled.div`
  background-color: var(--green-header);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .div-buttons {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    padding: 30px 40px;
    .div-buttons {
      display: block;
      display: flex;
      gap: 40px;
    }
    .menu-burguer {
      display: none;
    }
  }
`;
