import styled from "styled-components";

export const ContainerUser = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: transparent;
    margin-left: 10px;
    border: none;

    svg {
      color: var(--green);
      margin-top: 5px;
      cursor: pointer;
      font-size: 20px;
      border: none;
    }
  }
`;
