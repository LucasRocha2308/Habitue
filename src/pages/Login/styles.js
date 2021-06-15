import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (min-width: 571px) {
    flex-direction: row;
    img {
      position: absolute;
      left: 2px;
      top: -25px;
      height: 350px;
    }
  }
  @media (min-width: 760px) {
    img {
      z-index: 2;
    }
  }
  @media (min-width: 1100px) {
    img {
      left: 171px;
      top: 45px;
    }
  }
  img {
    margin: 0 auto;
    max-width: 280px;
  }
`;
export const NavLink = styled(Link)`
  margin: 10px auto;
  width: 120px;
  font-size: 18px;
`;
export const ContainerLogin = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  top: calc(360px / 2 + 25px);
  @media (min-width: 571px) {
    top: calc(200px / 2 + 25px);
    right: 10px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background: var(--green-header);
  border: 1px solid transparent;
  border-image: linear-gradient(var(--white) 0%, #4d8f6a 100%);
  border-image-slice: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 520px) {
    width: 75%;
    img {
      position: relative;
      margin-top: 10px;
      top: 0;
      left: 0;
      width: 150px;
      height: 50px;
    }
  }
  @media (min-width: 1100px) {
    width: 40%;
    height: 450px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  img {
    margin-top: 10px;
    width: 150px;
  }

  h4 {
    margin: 10px;
    a {
      color: var(--gray);
      font-weight: bold;
    }
  }
`;
