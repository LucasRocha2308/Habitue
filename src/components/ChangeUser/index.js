import { useState } from "react";
import { BsPencil } from "react-icons/all";
import TransitionsModalChangeUser from "../ModalChangeUser";
import { ContainerUser } from "./style";
const ChangeUser = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ContainerUser>
      <TransitionsModalChangeUser open={open} handleClose={handleClose} />
      <button onClick={handleOpen}>
        <BsPencil />
      </button>
    </ContainerUser>
  );
};
export default ChangeUser;
