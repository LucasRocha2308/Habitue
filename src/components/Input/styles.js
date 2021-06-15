import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    span {
      color: var(--red);
    }
  }
`;
export const InputContainer = styled.div`
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isErrored &&
    css`
      color: var(--red);
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    padding: 5px 0px 5px 5px;
    height: 30px;
    border: 1px solid var(--green-header);
    border-radius: 3px;
    margin: 10px auto;
  }

  input::placeholder {
    color: var(--green);
  }

  svg {
    margin-right: 16px;
  }
`;
