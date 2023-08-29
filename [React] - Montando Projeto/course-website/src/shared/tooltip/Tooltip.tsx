import { ContainerExternal, ContainerTooltip } from "./Tooltip.style";
import { Tooltip as TooltipAntD } from "antd";
import {TooltipTestId} from "./__tests__/Tooltip.spec";

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}
const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    return (
      <TooltipAntD title={title}>
        {children}
      </TooltipAntD>
    );
  }
  return (
    <ContainerTooltip data-testid={TooltipTestId.CONTAINER}>
      <ContainerExternal data-testid={TooltipTestId.INFO}>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};
export default Tooltip;
