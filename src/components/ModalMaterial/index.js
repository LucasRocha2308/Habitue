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
                usuários na sua organização.
              </p>
              <div>
                <button>
                  <div>
                    <span>Daniel</span>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/daniel-epichin-pena/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://gitlab.com/daniel_epichin_pena"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
                <button>
                  <div>
                    <span>Itallo</span>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/itallo-dornelas/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://gitlab.com/Itallo_Dornelas"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
                <button>
                  <div>
                    <span>Kelsiane</span>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/kelsianelima/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://gitlab.com/Kelsiane"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
                <button>
                  <div>
                    <span>Lucas</span>
                  </div>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/lucas-rocha-da-silva-530618149/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://gitlab.com/LucasRocha2308"
                      target="_blank"
                      rel="noreferrer"
                    >
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
