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
  width: 100%;
  line-height: 1.8;
  color: #141414;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    h2 {
      color: var(--green);
      font-style: italic;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      text-shadow: 0px 0px 8px var(--green-header);
      padding-top: 10px;
    }
    div {
      display: flex;
      flex-direction: row;
      width: 90%;
      margin: 0 auto;
      div {
        background: var(--green);
        width: 80%;
        margin: 0 auto;
        box-shadow: inset 0px 0px 54px 17px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

export const Bnt = styled.button`
  background: var(--gray);
  border: 1px solid #000000;
  border-radius: 20px;
  width: 20px;
  height: 20px;

  ::after {
    content: "+";
    color: #ffffff;
    backdrop-filter: blur(4px);
  }
`;
