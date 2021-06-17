import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #4d8f6a;
  color: #000;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  flex-wrap: wrap;

  p {
    margin-bottom: 1rem;
    color: #ffffff;
    text-align: justify;
    padding: 20px;
  }
  div {
    display: flex;
    gap: 10px;
  }
  button {
    border-radius: 40px 40px 40px 40px;
    border: #ffffff;
    background-color: #6adb7e;
    color: #ffffff;
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: space-around;
    cursor: auto;
    div {
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding-bottom: 5px;
      span {
        font-size: 14px;
        /* display: flex;
        align-items: center; */
      }
    }
  }
  a {
    cursor: pointer;
  }

  svg {
    font-size: 22px;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;
