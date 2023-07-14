import {
  BackgroudnImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";
import Input from "../../../shared/input/input/Input.tsx";
import { TitleInput } from "../../../shared/input/input/input.styles";
import Button from "../../../shared/button/button/Button";
import { useContext, useState } from "react";
import login from "../index";
import axios from "axios";
import SVGHome from "../../../shared/icons/SVGHome";
import useRequests from "../../../shared/hooks/useRequests";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import {UserType} from "../types/UserType";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postRequest, loading } = useRequests();
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin =  () => {
     postRequest<UserType>("http://localhost:8080/auth", {
      email: email,
      password: password,
    });
  };
  return (
    <ContainerLoginScreen>
      <BackgroudnImage src="/background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGHome /*possível passar css por aq*/ />
          <TitleLogin level={2}>Login</TitleLogin>
          <Input title={"Usuário"} margin={"32px 0px 0px"} onChange={handleEmail} value={email} />
          <Input
            type="password"
            title={"Senha"}
            margin={"32px 0px 0px"}
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
