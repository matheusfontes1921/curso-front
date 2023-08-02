import Screen from "../../../shared/screen/Screen";
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from "../../login/components/styles/display.style";
import { LimitedContainer } from "../../login/components/styles/limited.style";
import Input from "../../../shared/input/input/Input";
import Button from "../../../shared/button/button/Button";
import { useUserInsert } from "../hooks/useUserInsert";
import {useState} from "react";

const UserInsert = () => {
  const { user, disabledButton, handleCancelInsert, handleInsertAdmin, handleOnChangeInput } = useUserInsert();
  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "USUÁRIOS",
        },
        {
          name: "INSERIR USUÁRIOS",
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input value={user.name} onChange={(event) => handleOnChangeInput(event,"name")} margin={"0 0 16px 0"} title={"Nome"} placeholder={"Nome"} />
          <Input value={user.phone} onChange={(event) => handleOnChangeInput(event,"phone")} margin={"0 0 16px 0"} title={"Telefone"} placeholder={"Telefone"} />
          <Input value={user.email} onChange={(event) => handleOnChangeInput(event,"email")}margin={"0 0 16px 0"} title={"Email"} placeholder={"Email"} />
          <Input value={user.cpf} onChange={(event) => handleOnChangeInput(event,"cpf")} margin={"0 0 16px 0"} title={"CPF"} placeholder={"CPF"} />
          <Input value={user.password} onChange={(event) => handleOnChangeInput(event,"password")} margin={"0 0 16px 0"} title={"Senha"} placeholder={"Senha"} />
          <DisplayFlexJustifyRight>
            <LimitedContainer width={120} margin={"0 8px"}>
              <Button onClick={handleCancelInsert} danger>Cancelar</Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button disabled={disabledButton} onClick={handleInsertAdmin} type={"primary"}>Inserir Admin</Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};
export default UserInsert;
