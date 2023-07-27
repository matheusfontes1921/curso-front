import { Input as InputAntd, InputProps as InputPropsAntd } from "antd";
import { BoxInput, TitleInput } from "./input.styles";
import {InputTestIdEnum} from "./inputTestIdEnum";

export interface InputProps extends InputPropsAntd {
  title?: string;
  margin?: string;
}
const Input = ({ title, margin, ...props }: InputProps) => {
  return (
    <BoxInput data-testid={InputTestIdEnum.BOX_INPUT} style={{ margin }}>
      {title && <TitleInput data-testid={InputTestIdEnum.TITLE_INPUT}>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
