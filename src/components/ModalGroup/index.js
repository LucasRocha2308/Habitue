import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalWrapper, ModalContent, Bnt, Content, Container } from "./style";
import { useHistory } from "react-router-dom";
import { useGoal } from "../../providers/goals";
import { useActivitie } from "../../providers/activities";

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
  const { activitie } = useActivitie();
  const goTo = (path) => {
    history.push(path);
  };
  function format(str) {
    let dth = str.split("T");
    let data = dth[0].split("-").reverse().join("/");
    let hora = dth[1].split(":").slice(0, 2).join(":");
    return data + "-" + hora;
  }
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
              <h2>Metas</h2>
              <Container>
                {!goal.length ? (
                  <h2>O grupo precisa de algumas metas </h2>
                ) : (
                  goal.map((goals) => {
                    return (
                      <Content key={goals.id}>
                        <h3>{goals.title}</h3>
                        <h4>Dificuldade</h4>
                        <p>{goals.difficulty}</p>
                      </Content>
                    );
                  })
                )}
              </Container>
              <Bnt onClick={() => goTo("/registergoal")} />
              <h2>Atividades</h2>
              <Container>
                {!activitie.length ? (
                  <h2>O grupo precisa de algumas atividades </h2>
                ) : (
                  activitie.map((activities) => {
                    return (
                      <Content key={activities.id}>
                        <h3>{activities.title}</h3>
                        <h4>data e hora</h4>
                        <p>{format(activities.realization_time)}</p>
                      </Content>
                    );
                  })
                )}
              </Container>
              <Bnt onClick={() => goTo("/registeractivities")} />
            </ModalContent>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
}
