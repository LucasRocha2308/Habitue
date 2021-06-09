import styled from "styled-components";
import "../../styles/globalStyle";

export const ButtonGreen = styled.button`
  background-color: var(--dark-green);
  color: var(--white);
  border: 2px solid var(--green);
  padding: 10px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ButtonWhite = styled(ButtonGreen)`
  background-color: var(--white);
  color: var(--green);
`;
