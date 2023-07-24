import { ContainerLogoName, ContainerMenu, NameCompany } from "./menu.style";
import SVGHome from "../icons/SVGHome";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  LaptopOutlined,
  MailOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
import { Menu as MenuAntd } from "antd";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/routes";

type MenuItem = Required<MenuProps>["items"][number];


const Menu = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const [current, setCurrent] = useState("1");
  const items: MenuItem[] = [
    {
      key: "Home",
      label: "Principal",
      icon: <HomeOutlined />,
    },
    {
      key: "products",
      label: "Produtos",
      icon: <LaptopOutlined />,
      children: [
        {
          key: "products_view",
          label: "Visualizar",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: "products_insert",
          label: "Inserir",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: "category",
      label: "Categoriass",
      icon: <ProfileOutlined />,
      children: [
        {
          key: "categories_view",
          label: "Visualizar",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: "categories_insert",
          label: "Inserir",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: "order",
      label: "Pedidos",
      icon: <SafetyCertificateOutlined />,
    },
    {
      key: "user",
      label: "Clientes",
      icon: <UserOutlined />,
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <ContainerMenu>
      <ContainerLogoName>
        <SVGHome />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>
      <MenuAntd
        theme={"dark"}
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
