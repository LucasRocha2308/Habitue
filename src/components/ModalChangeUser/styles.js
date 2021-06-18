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
  flex-direction: column;
  gap: 10px;
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

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;
