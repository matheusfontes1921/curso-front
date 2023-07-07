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
import {useState} from "react";
import login from "../index";
const LoginScreen = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = () => {
        alert(`${user} + ${password}`)
    }
    return (
        <ContainerLoginScreen>
            <BackgroudnImage src="/background.png" />
            <ContainerLogin>
                <LimitedContainer>
                <LogoImage src="/emblemaCruzeiro.jpg" />
                    <TitleLogin level={2}>Login</TitleLogin>
                    <Input title={"Usuário"} margin={"32px 0px 0px"} onChange={handleUser} value={user}/>
                    <Input type="password" title={"Senha"} margin={"32px 0px 0px"} onChange={handlePassword} value={password}/>
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;