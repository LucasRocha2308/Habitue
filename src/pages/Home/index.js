import { useState } from "react";
import { ButtonGreen } from "../../components/Button";
import Header from "../../components/Header";
import TransitionsModal from "../../components/ModalMaterial";
import imagePorquinho from "../../images/porquinho.svg";
import { DivHome } from "./styles";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <DivHome>
        <div>
          <h2>Crie o hábito de se organizar financeiramente</h2>
          <ButtonGreen onClick={handleOpen}>Saiba mais</ButtonGreen>
          <TransitionsModal
            open={open}
            handleClose={handleClose}
          ></TransitionsModal>
        </div>
        <img src={imagePorquinho} alt="img-porquinho" />
      </DivHome>
    </>
  );
};

export default Home;
