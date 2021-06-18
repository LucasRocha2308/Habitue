import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalWrapper, ModalContent, Container } from "./styles";

import { ButtonGreen } from "../Button";
import { useUser } from "../../providers/user";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModalChangeUser({ open, handleClose }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const { changeUser } = useUser();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalWrapper>
            <ModalContent>
              <Container>
                <h2>Trocar nome de usuário</h2>
                <input onChange={(e) => setInputValue(e.target.value)} />
                <ButtonGreen onClick={() => changeUser(inputValue)}>
                  Trocar
                </ButtonGreen>
              </Container>
            </ModalContent>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
}
