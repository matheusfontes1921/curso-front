import { ContainerExternal, ContainerTooltip } from "./Tooltip.style";
import { Tooltip as TooltipAntD } from "antd";

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}
const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    <TooltipAntD title={title}>{children}</TooltipAntD>;
  }
  return (
    <ContainerTooltip>
      <ContainerExternal>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};
export default Tooltip;
