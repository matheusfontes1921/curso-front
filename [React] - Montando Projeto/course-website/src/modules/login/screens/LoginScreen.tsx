import {
    BackgroudnImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    LogoImage
} from "../styles/loginScreen.styles";
import Input from "../../../shared/input/input/Input.tsx";
const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroudnImage src="/background.png" />
            <ContainerLogin>
                <LimitedContainer>
                <LogoImage src="/icon.png" />
                    <Input title={"Usuário"}/>
                    <Input title={"Senha"}/>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;