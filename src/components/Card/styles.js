import styled from "styled-components";

export const DivCard = styled.div`
  background-color: var(--dark-green);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  gap: 20px;
  margin: 20px auto;
  border-radius: 10px;
  padding: 40px;
  @media only screen and (min-width: 768px) {
    width: 500px;
    padding: 100px;
  }
`;
