import { ProductType } from "../../../shared/types/ProductType";
import Tooltip from "../../../shared/tooltip/Tooltip";
import {ImageProduct} from "../styles/tooltipImage.style";

interface TootlTipImageProps {
  product: ProductType;
}
const TooltipImage = ({ product }: TootlTipImageProps) => {
  return (
      <Tooltip tooltip={<ImageProduct src={product.image}/>}>
      </Tooltip>
  );
};
export default TooltipImage;
