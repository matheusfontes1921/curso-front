import { Button, Result } from "antd";
import { ContainerLoginScreen } from "../../login/styles/loginScreen.styles";
import { ContainerPageNotFound } from "../styles/pageNotFound.styles";
import { useNavigate } from "react-router-dom";
import { LoginRoutesEnum } from "../../login/routes";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(LoginRoutesEnum.LOGIN);
  };
  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist anymore."
        extra={
          <Button onClick={handleBackButton} type="primary">
            Página de login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
