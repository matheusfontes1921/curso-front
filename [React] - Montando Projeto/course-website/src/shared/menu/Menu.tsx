import { ContainerLogoName, ContainerMenu, NameCompany } from "./menu.style";
import SVGHome from "../icons/SVGHome";

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLogoName>
        <SVGHome />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>
    </ContainerMenu>
  );
};

export default Menu;
