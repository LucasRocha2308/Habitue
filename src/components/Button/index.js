import styled from "styled-components";

export const ButtonGreen = styled.button`
  background-color: var(--dark-green);
  color: var(--white);
  border: 2px solid var(--green);
  padding: 10px;
  min-width: 80px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  &:hover {
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--green);
    transition: 0.2s;
    z-index: -1;
    top: 0;
    border-radius: 10px;
  }
  :hover::before {
    width: 100%;
  }
`;

export const ButtonWhite = styled(ButtonGreen)`
  background-color: var(--white);
  color: var(--green);
  &:hover {
    z-index: 2;
    color: var(--white);
  }
  &:before {
    background: var(--gray);
  }
  :hover::before {
    width: 100%;
  }
`;
