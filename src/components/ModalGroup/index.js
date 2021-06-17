import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalWrapper, ModalContent, Bnt } from "./style";
import { useHistory } from "react-router-dom";
import { useGoal } from "../../providers/goals";

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

export default function TransitionsModalGroup({ open, handleClose }) {
  const classes = useStyles();
  const history = useHistory();
  const { goal } = useGoal();
  const goTo = (path) => {
    history.push(path);
  };

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
              <div>
                <h2>Metas</h2>
                <div>
                  <div>
                    {!goal.length ? (
                      <h2>O grupo precisa de algumas metas </h2>
                    ) : (
                      goal.map((goals) => {
                        return (
                          <div>
                            <p>{goals.title}</p>
                            <p>{goals.difficulty}</p>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <Bnt onClick={() => goTo("/registergoal")} />
                </div>
                <h2>Atividades</h2>
                <div>
                  <div>
                    Cadastre atividades ao grupo
                    {/* {activities} */}
                  </div>
                  <Bnt onClick={() => goTo("/registeractivities")} />
                </div>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
}
