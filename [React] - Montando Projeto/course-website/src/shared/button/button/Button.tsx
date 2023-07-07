import { ButtonAntd } from "./button.styles";
import {ButtonProps} from "antd";

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;