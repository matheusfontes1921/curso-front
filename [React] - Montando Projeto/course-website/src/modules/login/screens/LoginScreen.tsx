import {
    BackgroudnImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    LogoImage
} from "../styles/loginScreen.styles";
const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroudnImage src="/background.png" />
            <ContainerLogin>
                <LimitedContainer>
                <LogoImage src="/icon.png" />
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;