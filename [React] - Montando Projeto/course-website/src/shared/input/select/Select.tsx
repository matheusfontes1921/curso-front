import { SelectProps as SelectPropsAntd, Select as SelectAntd } from "antd";
import {BoxSelect, TitleSelect} from "./select.styles";
import {SelectTestId} from "./__tests__/Select.spec";

interface SelectProps extends SelectPropsAntd {
  title?: string;
  margin?: string;
}
const Select = ({ title, margin, ...props }: SelectProps) => {
  return (
    <BoxSelect data-testid={SelectTestId.CONTAINER} style={{ margin }}>
      {title && <TitleSelect data-testid={SelectTestId.TITLE}>{title}</TitleSelect>}
      <SelectAntd data-testid={SelectTestId.SELECT_ANTD} style={{ width: "100%" }} {...props} />
    </BoxSelect>
  );
};

export default Select;
