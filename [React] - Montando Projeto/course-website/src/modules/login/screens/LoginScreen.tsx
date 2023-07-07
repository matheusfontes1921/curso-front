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
import axios from "axios";
import SVGHome from "../../../shared/icons/SVGHome";
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = async () => {
        const returnObject = await axios({
            method: "post",
            url: "http://localhost:8080/auth",
            data: {
                email: email,
                password: password,
            },
        }).then((result) => {
            alert(`Fez login ${result.data.accessToken}`);
            return result.data;
        }).catch(() => {
            alert("Usuário errado")
        });
        console.log(returnObject)
    }
    return (
        <ContainerLoginScreen>
            <BackgroudnImage src="/background.png" />
            <ContainerLogin>
                <LimitedContainer>
                <SVGHome /*possível passar css por aq*/ />
                    <TitleLogin level={2}>Login</TitleLogin>
                    <Input title={"Usuário"} margin={"32px 0px 0px"} onChange={handleEmail} value={email}/>
                    <Input type="password" title={"Senha"} margin={"32px 0px 0px"} onChange={handlePassword} value={password}/>
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;