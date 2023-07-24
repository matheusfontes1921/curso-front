import styled from "styled-components";
import SVGHome from "../icons/SVGHome";
import { Typography } from "antd";
const { Text } = Typography;

export const ContainerMenu = styled.div`
  display: flex;
  width: 240px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #001529;
  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
`;

export const ContainerLogoName = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  -webkit-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
`;

export const Logo = styled(SVGHome)`
  width: 50px;
  height: 50px;
  margin: 0px 16px;
`;

export const NameCompany = styled(Text)`
  color: white;
  font-weight: bold;
`;
