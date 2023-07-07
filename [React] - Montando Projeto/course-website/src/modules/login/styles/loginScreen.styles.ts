import styled from "styled-components";
import { Space, Typography } from "antd";

const { Title, Link } = Typography;

export const ContainerLoginScreen = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;
export const BackgroudnImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  /* adapta a imagem independente do tamanho*/
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  max-width: 646px;
  height: 100vh;
  //position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  padding: 22px;
`;

export const LogoImage = styled.img`
  width: 202px;
  border-radius: 24px;
`;

export const TitleLogin = styled(Title)`
  color: #006397;
  margin: 8px;
`;

export const LimitedContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 498px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;