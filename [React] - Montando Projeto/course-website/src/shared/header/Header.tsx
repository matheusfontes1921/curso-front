import { HeaderContainer, LogoExit } from "./header.style";
import { logout } from "../functions/connection/auth";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title={"Atenção"}
        open={open}
        onOk={() => logout(navigate)}
        onCancel={hideModal}
        okText={"Sim"}
        cancelText={"Cancelar"}
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
      <HeaderContainer>
        <LogoExit onClick={showModal} />
      </HeaderContainer>
    </>
  );
};

export default Header;