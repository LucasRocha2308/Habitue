import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import menu from "../../images/menu-burguer.svg";
import { useHistory } from "react-router-dom";

export default function MenuBurguer() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goTo = (path) => {
    history.push(path);
  };

  const btnFunction = (path) => {
    handleClose();
    goTo(path);
  };

  const handlerLogout = () => {
    handleClose();
    localStorage.clear();
    document.location.reload();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={menu} alt="menu" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => btnFunction("/habit")}>Hábitos</MenuItem>
        <MenuItem onClick={() => btnFunction("/group")}>Grupos</MenuItem>
        <MenuItem onClick={() => goTo("/subscribegroup")}>
          Entrar grupos{" "}
        </MenuItem>
        <MenuItem onClick={handlerLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
