import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { ModalWrapper, ModalContent } from "./styles";

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

export default function TransitionsModal({ open, handleClose }) {
  const classes = useStyles();

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
              <p className="paragrafo">
                Diante do cenário atual, ficou perceptível que várias pessoas
                que nos cercam não davam a devida atenção a sua organização
                financeira, isso resultou em problemas muito maiores do que
                poderiam acontecer. Essa aplicação visa auxiliar os seus
                usuários na sua organização financeira
              </p>
              <div>
                <button>
                  <span>Daniel</span>
                  <div>
                    <a href="https://www.linkedin.com/in/daniel-epichin-pena/">
                      <AiFillLinkedin />
                    </a>
                    <a href="https://gitlab.com/daniel_epichin_pena">
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
                <button>
                  <span>Itallo</span>
                  <div>
                    <a href="https://www.linkedin.com/in/itallo-dornelas/">
                      <AiFillLinkedin />
                    </a>
                    <a href="https://gitlab.com/Itallo_Dornelas">
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
                <button>
                  <span>Kelsiane</span>
                  <div>
                    <a href="https://www.linkedin.com/in/kelsianelima/">
                      <AiFillLinkedin />
                    </a>
                    <a href="https://gitlab.com/Kelsiane">
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
                <button>
                  <span>Lucas</span>
                  <div>
                    <a href="https://www.linkedin.com/in/lucas-rocha-da-silva-530618149/">
                      <AiFillLinkedin />
                    </a>
                    <a href="https://gitlab.com/LucasRocha2308">
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
}
