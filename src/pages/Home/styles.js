import styled from "styled-components";

export const StyledImage = styled.img`
  margin: 0 auto;
`;
export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  gap: 20px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 100px;
  }

  div h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media only screen and (min-width: 768px) {
      font-size: 52px;
    }
  }

  img {
    margin: 0 auto;
    width: 300px;
    @media only screen and (min-width: 768px) {
      width: 1000px;
      margin-left: -100px;
    }
  }
`;
