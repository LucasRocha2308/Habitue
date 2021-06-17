import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalWrapper = styled.div`
  width: 60%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--dark-green);
  color: #000000;
  border-radius: 10px;
  padding-bottom: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  line-height: 1.8;
`;
export const Container = styled.div`
  display: flex;
  width: 90%;
  background: var(--green);
  border-radius: 10px;
  border: 2 solid var(--gray);
  overflow-x: scroll;

  h2 {
    color: var(--gray);
    font-style: italic;
    margin: 0 auto;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    text-shadow: 0px 0px 8px var(--green-header);
    padding-top: 10px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  width: 500px;

  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    text-shadow: 0px 0px 8px var(--green-header);
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
  margin-top: 10px;
  height: 20px;

  ::after {
    content: "+";
    color: #ffffff;
    backdrop-filter: blur(4px);
  }
`;
