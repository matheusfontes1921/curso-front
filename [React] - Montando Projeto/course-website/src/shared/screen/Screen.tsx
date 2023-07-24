import { ScreenContainer } from "./screen.style";
import Breadcrumb, { ListBreadcrumb } from "../breadcrumb/Breadcrumb";
import { Divider } from "antd";
import Menu from "../menu/Menu";
import Header from "../header/Header";

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb?: ListBreadcrumb[];
}
const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <Menu />
        {listBreadcrumb && (
          <>
            <Breadcrumb listBreadcrumb={listBreadcrumb} />
            <Divider />
          </>
        )}

        {children}
      </ScreenContainer>
    </>
  );
};

export default Screen;
