import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  .textarea {
    padding: 15px 0 100px 0;
  }

  .button {
    width: 100px;
    margin: 0 auto;
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 300px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 auto;
    margin-top: 20px;
    gap: 20px;
    img {
      margin: 0;
      width: 400px;
    }
  }
`;
