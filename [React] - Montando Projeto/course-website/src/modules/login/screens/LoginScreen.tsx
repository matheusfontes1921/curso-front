import {
    BackgroudnImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    LogoImage, TitleLogin
} from "../styles/loginScreen.styles";
import Input from "../../../shared/input/input/Input.tsx";
import {TitleInput} from "../../../shared/input/input/input.styles";
import Button from "../../../shared/button/button/Button";
const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroudnImage src="/background.png" />
            <ContainerLogin>
                <LimitedContainer>
                <LogoImage src="/emblemaCruzeiro.jpg" />
                    <TitleLogin level={2}>Login</TitleLogin>
                    <Input title={"Usuário"}/>
                    <Input title={"Senha"}/>
                    <Button type="primary" margin="64px 0px 16px 0px">Entrar</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;