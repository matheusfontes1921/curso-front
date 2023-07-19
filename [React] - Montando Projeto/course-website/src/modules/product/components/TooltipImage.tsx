import { ProductType } from "../../../shared/types/ProductType";
import { Tooltip } from "antd";

interface TootlTipImageProps {
  product: ProductType;
}
const TooltipImage = ({ product }: TootlTipImageProps) => {
  return (
    <Tooltip title={product.name}>
      <span>{product.id}</span>
    </Tooltip>
  );
};
export default TooltipImage;
