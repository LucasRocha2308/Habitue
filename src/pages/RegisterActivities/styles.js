import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .button {
    width: 100px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 auto;
    margin-top: 50px;
    gap: 20px;
    img {
      margin: 0;
      width: 400px;
    }
  }
`;
